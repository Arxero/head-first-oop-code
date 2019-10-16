"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitTester {
    testType(unit, type, expectedOutputType) {
        console.log('\nTesting setting/getting the type property.');
        unit.setType(type);
        const outputType = unit.getType();
        this.compareProperties(outputType, expectedOutputType);
    }
    testUnitSpecificProperty(unit, property, value, expectedOutput) {
        console.log('Testing setting/getting unit specific property');
        unit.setProperty(property, value);
        const outputProperty = unit.getProperty(property);
        this.compareProperties(outputProperty, expectedOutput);
    }
    testChangeProperty(unit, property, value, expectedOutput) {
        console.log('Testing changing an existing property\' value');
        unit.setProperty(property, value);
        const outputProperty = unit.getProperty(property);
        this.compareProperties(outputProperty, expectedOutput);
    }
    testingNonExistingProperty(unit, property) {
        console.log('Testing non existing property.');
        try {
            const outPut = unit.getProperty(property);
            console.log(`Test failed with value of ${outPut}`);
        }
        catch (error) {
            console.log('Test passed!');
        }
    }
    compareProperties(input, expectedOutput) {
        if (input === expectedOutput) {
            console.log('Test passed.');
        }
        else {
            console.log(`Test failed: ${input} didn't matched ${expectedOutput}`);
        }
    }
}
exports.UnitTester = UnitTester;
//# sourceMappingURL=UnitTester.js.map