"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Guitar_1 = require("./guitarInventory/Classes/Guitar");
const GuitarSpec_1 = require("./guitarInventory/Classes/GuitarSpec");
const Invernotry_1 = require("./guitarInventory/Classes/Invernotry");
const BuilderType_1 = require("./guitarInventory/Enums/BuilderType");
const GuitarType_1 = require("./guitarInventory/Enums/GuitarType");
const WoodType_1 = require("./guitarInventory/Enums/WoodType");
const inventory = new Invernotry_1.Invernotry();
const erinGuitarSpec = new GuitarSpec_1.GuitarSpec(BuilderType_1.BuilderType.Fender, 'Stratocastor', GuitarType_1.GuitarType.Electric, WoodType_1.WoodType.Alder, WoodType_1.WoodType.Alder, 12);
const whatErinLikes = new Guitar_1.Guitar('', 0, erinGuitarSpec);
// const whatMartinLikes = new Guitar('', 0, BuilderType.Martin, 'QM-18', GuitarType.Acoustic, WoodType.Mahagany, WoodType.Adirondack)
initializeInventory(inventory);
const guitars = inventory.search(erinGuitarSpec);
if (guitars.length > 0) {
    guitars.forEach(guitar => console.log(`Erin, you might like this ${guitar.getSpec().getBuilder()} ${guitar.spec.getModel()} ${guitar.spec.getType()} guitar:\n ${guitar.spec.getBackWood()} back and sides. \n ${guitar.spec.getTopWood()} top. \nYou can have it for only ${guitar.getPrice()}! \nGuiltar strings: ${guitar.getSpec().getNumStrings()}\n ----`));
}
else {
    console.log('Sorry, Erin, we have nothing for you.');
}
function initializeInventory(inventory) {
    inventory.addGuitar('v95693', 1499.95, new GuitarSpec_1.GuitarSpec(BuilderType_1.BuilderType.Fender, 'Stratocastor', GuitarType_1.GuitarType.Electric, WoodType_1.WoodType.Alder, WoodType_1.WoodType.Alder, 12));
    inventory.addGuitar('v958793', 999.95, new GuitarSpec_1.GuitarSpec(BuilderType_1.BuilderType.Fender, 'Stratocastor', GuitarType_1.GuitarType.Electric, WoodType_1.WoodType.Alder, WoodType_1.WoodType.Alder, 6));
}
//# sourceMappingURL=index.js.map