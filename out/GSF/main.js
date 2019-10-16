"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Unit_1 = require("./Board/Classes/Unit");
const UnitTester_1 = require("./Board/Classes/UnitTester");
console.log('Testing the Unit class...');
const tester = new UnitTester_1.UnitTester();
const unit = new Unit_1.Unit(1);
tester.testType(unit, 'infantry', 'infantry');
tester.testUnitSpecificProperty(unit, 'hitpoints', 25, 25);
tester.testChangeProperty(unit, 'hitpoints', 15, 15);
tester.testingNonExistingProperty(unit, 'strenght');
//# sourceMappingURL=main.js.map