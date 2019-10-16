import { InstrumentSpec } from './Classes/InstrumentSpec';
import { Invernotry } from './Classes/Invernotry';
import { BuilderType } from './Enums/BuilderType';
import { InstrumentType } from './Enums/InstrumentType';
import { Type } from './Enums/Type';
import { WoodType } from './Enums/WoodType';


const inventory: Invernotry = new Invernotry();
const properties = new Map();
properties.set('builder', BuilderType.Gibson);
properties.set('backWood', WoodType.Maple);
const clientSpec = new InstrumentSpec(properties);

initializeInventory(inventory);
const foundInstruments = inventory.search(clientSpec);

if (foundInstruments.length > 0) {
  console.log('You might like these instrument:');
  for (const instrument of foundInstruments) {
    const spec = instrument.getSpec();
    console.log(`We have a ${spec.getProperty('instrumentType')} with the following properties:`);

    for (const propertyName of spec.getProperties().keys()) {
      if (propertyName === 'instrumentType') {
        continue;
      }
      console.log(`${propertyName}: ${spec.getProperty(propertyName)}`);
    }
    console.log(`You can have this ${spec.getProperty('instrumentType')} for $${instrument.getPrice()}\n----`);
  }


} else {
  console.log('Sorry, we have nothing for you.');
}



function initializeInventory(inventory: Invernotry): void {
  const properties = new Map();
  // Guitar
  properties.set('instrumentType', InstrumentType.Guitar);
  properties.set('builder', BuilderType.Collings);
  properties.set('model', 'CJ');
  properties.set('type', Type.Acoustic);
  properties.set('numStrings', 6);
  properties.set('topWood', WoodType.IndianRosewood);
  properties.set('backWood', WoodType.Sitka);
  inventory.addInstrument('11277', 399.99, new InstrumentSpec(properties));

  // Mandolin
  properties.set('instrumentType', InstrumentType.Mandolin);
  properties.set('builder', BuilderType.Gibson);
  properties.set('model', 'F5-G');
  properties.set('type', Type.Acoustic);
  properties.set('topWood', WoodType.Maple);
  properties.set('backWood', WoodType.Maple);
  inventory.addInstrument('115768', 549.99, new InstrumentSpec(properties));

  // Banjo
  properties.set('instrumentType', InstrumentType.Banjo);
  properties.set('builder', BuilderType.Gibson);
  properties.set('model', 'RB-3');
  properties.set('type', Type.Acoustic);
  properties.set('topWood', WoodType.Maple);
  properties.set('backWood', WoodType.Maple);
  inventory.addInstrument('11357468', 245.99, new InstrumentSpec(properties));

  // const mandolinProps = new Map();
  // mandolinProps.set('instrumentType', InstrumentType.Mandolin);
  // mandolinProps.set('builder', BuilderType.Gibson);
  // mandolinProps.set('model', 'F5-G');
  // mandolinProps.set('type', Type.Acoustic);
  // mandolinProps.set('topWood', WoodType.Maple);
  // mandolinProps.set('backWood', WoodType.Maple);
  // inventory.addInstrument('115768', 549.99, new InstrumentSpec(mandolinProps));

  // const banjoProps = new Map();
  // banjoProps.set('instrumentType', InstrumentType.Banjo);
  // banjoProps.set('builder', BuilderType.Gibson);
  // banjoProps.set('model', 'RB-3');
  // banjoProps.set('type', Type.Acoustic);
  // banjoProps.set('topWood', WoodType.Maple);
  // banjoProps.set('backWood', WoodType.Maple);
  // inventory.addInstrument('11357468', 245.99, new InstrumentSpec(banjoProps));
}




