import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { Table } from '../index';


_chai.should();

@suite
class tableTest {

  before() {

  }

  @test 'test search'() {
    const val = Table.getValueFromTable('cl', 'ax');
    val!.should.equal('C8');
  }

  @test 'test reverse search'() {
    const val = Table.getReverseValueFromTable('C8');
    val?.should.equal([['cl', 'cx', 'ecx', '1'], ['al', 'ax', 'eax', '0']]);
  }
}
