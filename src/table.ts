import { create16bitRmTable, create32bitModRmTable, create32bitSIBtable, createTable } from './createTable';

export class Table {
  private set1 = new Set(['al', 'ax', 'eax', '0']);
  private set2 = new Set(['cl', 'cx', 'ecx', '1']);
  private set3 = new Set(['dl', 'dx', 'edx', '2']);
  private set4 = new Set(['bl', 'bx', 'ebx', '3']);
  private set5 = new Set(['ah', 'sp', 'esp', '4']);
  private set6 = new Set(['ch', 'bp', 'ebp', '5']);
  private set7 = new Set(['dh', 'si', 'esi', '6']);
  private set8 = new Set(['bh', 'di', 'edi', '7']);
  private sets = [this.set1, this.set2, this.set3, this.set4, this.set5, this.set6, this.set7, this.set8];

  private table32rm = create32bitModRmTable();
  private table32sib = create32bitSIBtable();
  private table16rm = create16bitRmTable();

  private reversed32rmTable = new Map<string, [string, string]>();
  private reversed32sibTable = new Map<string, [string, string]>();
  private reversed16rmTable = new Map<string, [string, string]>();

  constructor() {
    this.table32rm.forEach((value, key) => {
      value.forEach((value1, key1) => {
        this.reversed32rmTable.set(value1, [key, key1]);
      });
    });
    this.table16rm.forEach((value, key) => {
      value.forEach((value1, key1) => {
        this.reversed16rmTable.set(value1, [key, key1]);
      });
    });
    this.table32sib.forEach((value, key) => {
      value.forEach((value1, key1) => {
        this.reversed32sibTable.set(value1, [key, key1]);
      });
    });
  }

  getReverseValueFromTable(op: string, type?: tableType): [string[], string[]] {
    const table = type ? (this.getTable(type, true) as Map<string, [string, string]>) : this.reversed32rmTable;
    const sets = table.get(op);
    // @ts-ignore
    const secondSet = this[sets[0]];
    // @ts-ignore
    const firstSet = this[sets[1]];
    // @ts-ignore
    return [firstSet ? Array.from(firstSet) : [sets[1]], !!secondSet ? Array.from(secondSet) : [sets[0]]];
  }

  private getTable(type: tableType, reversed?: boolean) {
    switch (type) {
      case '16rm':
        return !reversed ? this.table16rm : this.reversed16rmTable;
      case '32rm':
        return !reversed ? this.table32rm : this.reversed32rmTable;
      case '32sib':
        return !reversed ? this.table32sib : this.reversed32sibTable;
    }
  }

  getValueFromTable(op1: string, op2: string, type?: tableType): string | undefined {
    const table = type ? (this.getTable(type) as Map<string, Map<string, string>>) : this.table32rm;
    const setNameForOp1 = this.presentInSet(op1);
    const setNameForOp2 = this.presentInSet(op2);
    if (type === '32sib') {
      op1 = op1.includes('[*]') ? op1 : op1.replace('[', '').replace(']', '');
      op2 = op2.includes('*1') ? op2.replace('*1', '') : op2;
      return table.get(op1)!.get(op2);
    }
    //check rm byte
    if (op1.length === 1) {
      return table.get(setNameForOp1!)?.get(setNameForOp2 ? setNameForOp2 : op2);
    }
    //both are sets
    if (setNameForOp1 && setNameForOp2) {
      return table.get(setNameForOp2)?.get(setNameForOp1);
    }
    //only one is in a set
    if (setNameForOp1) {
      return table.get(setNameForOp1)?.get(op2);
    }
    if (setNameForOp2) {
      return table.get(setNameForOp2)?.get(op1);
    }
    throw new Error('Could not find value');
  }

  private presentInSet(op: string): string | undefined {
    let setName;
    this.sets.some((s, index) => {
      if (s.has(op)) {
        setName = `set${index + 1}`;
      }
    });
    return setName;
  }
}

type tableType = '32rm' | '32sib' | '16rm';
