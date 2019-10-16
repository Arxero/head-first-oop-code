import { IUnit } from './../Interfaces/IUnit';

export class UnitTester {

  testType(unit: IUnit, type: string, expectedOutputType: string) {
    console.log('\nTesting setting/getting the type property.');
    unit.setType(type);
    const outputType = unit.getType();
    this.compareProperties(outputType, expectedOutputType);
  }

  testUnitSpecificProperty(unit: IUnit, property: string, value: any, expectedOutput: any) {
    console.log('Testing setting/getting unit specific property');
    unit.setProperty(property, value);
    const outputProperty = unit.getProperty(property);
    this.compareProperties(outputProperty, expectedOutput);
  }

  testChangeProperty(unit: IUnit, property: string, value: any, expectedOutput: any) {
    console.log('Testing changing an existing property\' value');
    unit.setProperty(property, value);
    const outputProperty = unit.getProperty(property);
    this.compareProperties(outputProperty, expectedOutput);
  }

  testingNonExistingProperty(unit: IUnit, property: string) {
    console.log('Testing non existing property.');
    try {
      const outPut = unit.getProperty(property);
      console.log(`Test failed with value of ${outPut}`);
    } catch (error) {
      console.log('Test passed!');
    }

  }

  private compareProperties(input, expectedOutput) {
    if (input === expectedOutput) {
      console.log('Test passed.');
    } else {
      console.log(`Test failed: ${input} didn't matched ${expectedOutput}`);
    }
  }
}
