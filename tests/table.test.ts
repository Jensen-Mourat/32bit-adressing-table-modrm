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

  @test 'test 32sib table'() {
    let val = Table.getValueFromTable('[*]', '[eax*2]', '32sib');
    val!.should.equal('45');
    val = Table.getValueFromTable('[edx]', '[ebx]', '32sib');
    val!.should.equal('1A');
  }

  @test 'test 16 table'() {
    let val = Table.getValueFromTable('ax', '[bx]', '16rm');
    val!.should.equal('07');
  }

  @test 'test reverse search'() {
    const val = Table.getReverseValueFromTable('C8');
    val.should.be.deep.equal([['al', 'ax', 'eax', '0'], ['cl', 'cx', 'ecx', '1']]);
  }

}
