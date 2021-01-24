export class _Table {
  private set1 = new Set(['al', 'ax', 'eax', '0']);
  private set2 = new Set(['cl', 'cx', 'ecx', '1']);
  private set3 = new Set(['di', 'dx', 'edx', '2']);
  private set4 = new Set(['bl', 'bx', 'ebx', '3']);
  private set5 = new Set(['ah', 'sp', 'esp', '4']);
  private set6 = new Set(['ch', 'bp', 'ebp', '5']);
  private set7 = new Set(['dh', 'si', 'esi', '6']);
  private set8 = new Set(['bh', 'di', 'edi', '7']);
  private sets = [this.set1, this.set2, this.set3, this.set4, this.set5, this.set6, this.set7, this.set8];

  private table = new Map<string, Map<string, string>>()
    .set(
      'set1', //row 1
      new Map()
        .set('set1', 'C0')
        .set('set2', 'C8')
        .set('set3', 'D0')
        .set('set3', 'D8')
        .set('set4', 'E0')
        .set('set5', 'E8')
        .set('set6', 'F0')
        .set('set7', 'F8'),
    )
    .set(
      'set2', //row 2
      new Map()
        .set('set1', 'C1')
        .set('set2', 'C9')
        .set('set3', 'D1')
        .set('set3', 'D9')
        .set('set4', 'E1')
        .set('set5', 'E9')
        .set('set6', 'F1')
        .set('set7', 'F9'),
    )
    .set(
      'set3', //row 3
      new Map()
        .set('set1', 'C2')
        .set('set2', 'CA')
        .set('set3', 'D2')
        .set('set3', 'DA')
        .set('set4', 'E2')
        .set('set5', 'EA')
        .set('set6', 'F2')
        .set('set7', 'FA'),
    )
    .set(
      'set4', //row 4
      new Map()
        .set('set1', 'C3')
        .set('set2', 'CB')
        .set('set3', 'D3')
        .set('set3', 'DB')
        .set('set4', 'E3')
        .set('set5', 'EB')
        .set('set6', 'F3')
        .set('set7', 'FB'),
    )
    .set(
      'set5', //row 5
      new Map()
        .set('set1', 'C4')
        .set('set2', 'CC')
        .set('set3', 'D4')
        .set('set3', 'DC')
        .set('set4', 'E4')
        .set('set5', 'EC')
        .set('set6', 'F4')
        .set('set7', 'FC'),
    )
    .set(
      'set6', //row 6
      new Map()
        .set('set1', 'C5')
        .set('set2', 'CD')
        .set('set3', 'D5')
        .set('set3', 'DD')
        .set('set4', 'E5')
        .set('set5', 'ED')
        .set('set6', 'F5')
        .set('set7', 'FD'),
    )
    .set(
      'set7', //row 7
      new Map()
        .set('set1', 'C6')
        .set('set2', 'CE')
        .set('set3', 'D6')
        .set('set3', 'DE')
        .set('set4', 'E6')
        .set('set5', 'EE')
        .set('set6', 'F6')
        .set('set7', 'FE'),
    )
    .set(
      'set8', //row 8
      new Map()
        .set('set1', 'C7')
        .set('set2', 'CF')
        .set('set3', 'D7')
        .set('set3', 'DF')
        .set('set4', 'E7')
        .set('set5', 'EF')
        .set('set6', 'F7')
        .set('set7', 'FF'),
    )
    .set(
      '[eax]', //row 9
      new Map()
        .set('set1', '00')
        .set('set2', '08')
        .set('set3', '10')
        .set('set3', '18')
        .set('set4', '20')
        .set('set5', '28')
        .set('set6', '30')
        .set('set7', '38'),
    )
    .set(
      '[ecx]', //row 10
      new Map()
        .set('set1', '01')
        .set('set2', '09')
        .set('set3', '11')
        .set('set3', '19')
        .set('set4', '21')
        .set('set5', '29')
        .set('set6', '31')
        .set('set7', '39'),
    )
    .set(
      '[edx]', //row 11
      new Map()
        .set('set1', '02')
        .set('set2', '0A')
        .set('set3', '12')
        .set('set3', '1A')
        .set('set4', '22')
        .set('set5', '2A')
        .set('set6', '32')
        .set('set7', '3A'),
    )
    .set(
      '[ebx]', //row 11
      new Map()
        .set('set1', '03')
        .set('set2', '0B')
        .set('set3', '13')
        .set('set3', '1B')
        .set('set4', '23')
        .set('set5', '2B')
        .set('set6', '33')
        .set('set7', '3B'),
    )
    .set(
      '[esi]', //row 11
      new Map()
        .set('set1', '06')
        .set('set2', '0E')
        .set('set3', '16')
        .set('set3', '1E')
        .set('set4', '26')
        .set('set5', '2E')
        .set('set6', '36')
        .set('set7', '3E'),
    )
    .set(
      '[edi]', //row 11
      new Map()
        .set('set1', '07')
        .set('set2', '0F')
        .set('set3', '17')
        .set('set3', '1F')
        .set('set4', '27')
        .set('set5', '2F')
        .set('set6', '37')
        .set('set7', '3F'),
    );

  reversedTable = new Map<string, [string, string]>();

  constructor() {
    this.table.forEach((value, key) => {
      value.forEach((value1, key1) => {
        this.reversedTable.set(value1, [key, key1]);
      });
    });
  }

  getReverseValueFromTable(op: string): [string[], string[]] {
    const sets = this.reversedTable.get(op);
    // @ts-ignore
    return [this[sets[0]] ? Array.from(this[sets[0]]) : [sets[0]], Array.from(this[sets[0]])];
  }

  getValueFromTable(op1: string, op2: string): string | undefined {
    const setNameForOp1 = this.presentInSet(op1);
    const setNameForOp2 = this.presentInSet(op2);
    if (!setNameForOp2) {
      // no collumn matching
      return undefined;
    }
    if (setNameForOp1) {
      return this.table.get(setNameForOp1)?.get(setNameForOp2);
    }
    if (!setNameForOp1) {
      // can be [edi], [eax] ....
      return this.table.get(op1)?.get(setNameForOp2);
    }
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

export const Table = new _Table();
