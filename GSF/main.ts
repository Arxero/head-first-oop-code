import { Unit } from './Board/Classes/Unit';
import { UnitTester } from './Board/Classes/UnitTester';

console.log('Testing the Unit class...');
const tester = new UnitTester();
const unit = new Unit(1);
tester.testType(unit, 'infantry', 'infantry');
tester.testUnitSpecificProperty(unit, 'hitpoints', 25, 25);
tester.testChangeProperty(unit, 'hitpoints', 15, 15);
tester.testingNonExistingProperty(unit, 'strenght');
