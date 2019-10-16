"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstrumentSpec_1 = require("./Classes/InstrumentSpec");
const Invernotry_1 = require("./Classes/Invernotry");
const BuilderType_1 = require("./Enums/BuilderType");
const InstrumentType_1 = require("./Enums/InstrumentType");
const Type_1 = require("./Enums/Type");
const WoodType_1 = require("./Enums/WoodType");
const inventory = new Invernotry_1.Invernotry();
const properties = new Map();
properties.set('builder', BuilderType_1.BuilderType.Gibson);
properties.set('backWood', WoodType_1.WoodType.Maple);
const clientSpec = new InstrumentSpec_1.InstrumentSpec(properties);
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
}
else {
    console.log('Sorry, we have nothing for you.');
}
function initializeInventory(inventory) {
    const properties = new Map();
    // Guitar
    properties.set('instrumentType', InstrumentType_1.InstrumentType.Guitar);
    properties.set('builder', BuilderType_1.BuilderType.Collings);
    properties.set('model', 'CJ');
    properties.set('type', Type_1.Type.Acoustic);
    properties.set('numStrings', 6);
    properties.set('topWood', WoodType_1.WoodType.IndianRosewood);
    properties.set('backWood', WoodType_1.WoodType.Sitka);
    inventory.addInstrument('11277', 399.99, new InstrumentSpec_1.InstrumentSpec(properties));
    // Mandolin
    properties.set('instrumentType', InstrumentType_1.InstrumentType.Mandolin);
    properties.set('builder', BuilderType_1.BuilderType.Gibson);
    properties.set('model', 'F5-G');
    properties.set('type', Type_1.Type.Acoustic);
    properties.set('topWood', WoodType_1.WoodType.Maple);
    properties.set('backWood', WoodType_1.WoodType.Maple);
    inventory.addInstrument('115768', 549.99, new InstrumentSpec_1.InstrumentSpec(properties));
    // Banjo
    properties.set('instrumentType', InstrumentType_1.InstrumentType.Banjo);
    properties.set('builder', BuilderType_1.BuilderType.Gibson);
    properties.set('model', 'RB-3');
    properties.set('type', Type_1.Type.Acoustic);
    properties.set('topWood', WoodType_1.WoodType.Maple);
    properties.set('backWood', WoodType_1.WoodType.Maple);
    inventory.addInstrument('11357468', 245.99, new InstrumentSpec_1.InstrumentSpec(properties));
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
//# sourceMappingURL=main.js.map