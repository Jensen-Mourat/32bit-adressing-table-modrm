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

  private table = new Map<string, Map<string, string>>()
    .set(
      'set1', //row 1
      new Map()
        .set('set1', 'C0')
        .set('set2', 'C1')
        .set('set3', 'C2')
        .set('set4', 'C3')
        .set('set5', 'C4')
        .set('set6', 'C5')
        .set('set7', 'C6')
        .set('set8', 'C7')
        .set('[eax]', '00')
        .set('[ecx]', '01')
        .set('[edx]', '02')
        .set('[ebx]', '03')
        .set('[sib]', '04')
        .set('disp32', '05')
        .set('[esi]', '06')
        .set('[edi]', '07'),
    )
    .set(
      'set2', //row 2
      new Map()
        .set('set1', 'C8')
        .set('set2', 'C9')
        .set('set3', 'CA')
        .set('set4', 'CB')
        .set('set5', 'CC')
        .set('set6', 'CD')
        .set('set7', 'CE')
        .set('set8', 'CF')
        .set('[eax]', '08')
        .set('[ecx]', '09')
        .set('[edx]', '0A')
        .set('[ebx]', '0B')
        .set('[sib]', '0C')
        .set('disp32', '0D')
        .set('[esi]', '0E')
        .set('[edi]', '0F'),
    )
    .set(
      'set3', //row 3
      new Map()
        .set('set1', 'D0')
        .set('set2', 'D1')
        .set('set3', 'D2')
        .set('set4', 'D3')
        .set('set5', 'D4')
        .set('set6', 'D5')
        .set('set7', 'D6')
        .set('set8', 'D7')
        .set('[eax]', '10')
        .set('[ecx]', '11')
        .set('[edx]', '12')
        .set('[ebx]', '13')
        .set('[sib]', '14')
        .set('disp32', '15')
        .set('[esi]', '16')
        .set('[edi]', '17'),
    )
    .set(
      'set4', //row 4
      new Map()
        .set('set1', 'D8')
        .set('set2', 'D9')
        .set('set3', 'DA')
        .set('set4', 'DB')
        .set('set5', 'DC')
        .set('set6', 'DD')
        .set('set7', 'DE')
        .set('set8', 'DF')
        .set('[eax]', '18')
        .set('[ecx]', '19')
        .set('[edx]', '1A')
        .set('[ebx]', '1B')
        .set('[sib]', '1C')
        .set('disp32', '1D')
        .set('[esi]', '1E')
        .set('[edi]', '1F'),
    )
    .set(
      'set5', //row 5
      new Map()
        .set('set1', 'E0')
        .set('set2', 'E1')
        .set('set3', 'E2')
        .set('set3', 'E3')
        .set('set4', 'E4')
        .set('set5', 'E5')
        .set('set6', 'E6')
        .set('set7', 'E7')
        .set('[eax]', '20')
        .set('[ecx]', '21')
        .set('[edx]', '22')
        .set('[ebx]', '23')
        .set('[sib]', '24')
        .set('disp32', '25')
        .set('[esi]', '26')
        .set('[edi]', '27'),
    )
    .set(
      'set6', //row 6
      new Map()
        .set('set1', 'E8')
        .set('set2', 'E9')
        .set('set3', 'EA')
        .set('set4', 'EB')
        .set('set5', 'EC')
        .set('set6', 'ED')
        .set('set7', 'EE')
        .set('set8', 'EF')
        .set('[eax]', '28')
        .set('[ecx]', '29')
        .set('[edx]', '2A')
        .set('[ebx]', '2B')
        .set('[sib]', '2C')
        .set('disp32', '2D')
        .set('[esi]', '2E')
        .set('[edi]', '2F'),
    )
    .set(
      'set7', //row 7
      new Map()
        .set('set1', 'F0')
        .set('set2', 'F1')
        .set('set3', 'F2')
        .set('set4', 'F3')
        .set('set5', 'F4')
        .set('set6', 'F5')
        .set('set7', 'F6')
        .set('set8', 'F7')
        .set('[eax]', '30')
        .set('[ecx]', '31')
        .set('[edx]', '32')
        .set('[ebx]', '33')
        .set('[sib]', '34')
        .set('disp32', '35')
        .set('[esi]', '36')
        .set('[edi]', '37'),
    )
    .set(
      'set8', //row 8
      new Map()
        .set('set1', 'F8')
        .set('set2', 'F9')
        .set('set3', 'FA')
        .set('set4', 'FB')
        .set('set5', 'FC')
        .set('set6', 'FD')
        .set('set7', 'FE')
        .set('set8', 'FF')
        .set('[eax]', '38')
        .set('[ecx]', '39')
        .set('[edx]', '3A')
        .set('[ebx]', '3B')
        .set('[sib]', '3C')
        .set('disp32', '3D')
        .set('[esi]', '3E')
        .set('[edi]', '3F'),
    );

  private reversedTable = new Map<string, [string, string]>();

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
    const firstSet = this[sets[0]];
    // @ts-ignore
    const secondSet = this[sets[1]];
    // @ts-ignore
    return [Array.from(firstSet), !!secondSet ? Array.from(secondSet) : [sets[1]]];
  }

  getValueFromTable(op1: string, op2: string): string | undefined {
    const setNameForOp1 = this.presentInSet(op1);
    const setNameForOp2 = this.presentInSet(op2);
    if (setNameForOp1 && setNameForOp2) {
      return this.table.get(setNameForOp1)?.get(setNameForOp2);
    }
    if (setNameForOp1 && !setNameForOp2) {
      return this.table.get(setNameForOp1)?.get(op2);
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
