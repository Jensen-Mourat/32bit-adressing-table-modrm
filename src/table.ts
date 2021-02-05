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
    const firstSet = this[sets[0]];
    // @ts-ignore
    const secondSet = this[sets[1]];
    // @ts-ignore
    return [Array.from(firstSet), !!secondSet ? Array.from(secondSet) : [sets[1]]];
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
    let setNameForOp1 = this.presentInSet(op1);
    let setNameForOp2 = this.presentInSet(op2);
    //check modrm byte
    if (op1.length === 1) {
      return table.get(setNameForOp1!)?.get(setNameForOp2 ? setNameForOp2 : op2);
    }
    //check memory addressing
    if (op2.includes('[')) {
      const temp = op1;
      op1 = op2;
      op2 = temp;
      setNameForOp1 = this.presentInSet(op1);
      setNameForOp2 = this.presentInSet(op2);
    }
    if (setNameForOp2 && setNameForOp1) {
      return table.get(setNameForOp2)?.get(setNameForOp1);
    }
    if (setNameForOp2 && !setNameForOp1) {
      return table.get(setNameForOp2)?.get(op1);
    }
    return undefined;
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
