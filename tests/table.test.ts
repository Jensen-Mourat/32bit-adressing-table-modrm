import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { Table } from '../index';
import { createTable } from '../src/createTable';


_chai.should();

@suite
class tableTest {

  before() {

  }

  @test 'test search'() {
    let val = Table.getValueFromTable('cl', 'ax', '16rm');
    val!.should.equal('C1');
    val = Table.getValueFromTable('bl', 'al');
    val!.should.equal('C3');
    val = Table.getValueFromTable('[eax]', 'al');
    val!.should.equal('00');
    val = Table.getValueFromTable('[eax]', 'bl');
    val!.should.equal('18');
    val = Table.getValueFromTable('eax', 'ebx');
    val!.should.equal('D8');
    val = Table.getValueFromTable('eax', '[ebx]');
    val!.should.equal('03');
    val = Table.getValueFromTable('eax', '[ecx]');
    val!.should.equal('01');
    val = Table.getValueFromTable('eax', 'disp32');
    val!.should.equal('05');
  }

  @test 'test reverse search'() {
    const val = Table.getReverseValueFromTable('C8');
    val.should.be.deep.equal([['cl', 'cx', 'ecx', '1'], ['al', 'ax', 'eax', '0']]);
  }

}
