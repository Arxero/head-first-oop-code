// interface IGuitar {
//     serialNumber: string;
//     price: number;
//     spec: IGuitarSpec;
//     getSerialNumebr(): string;
//     getPrice(): number;
//     setPrice(price: number);
//     getSpec(): IGuitarSpec;
// }
// interface IGuitarSpec {
//     builder: BuilderType;
//     model: string;
//     type: GuitarType;
//     backWood: WoodType;
//     topWood: WoodType;
//     numStrings: number;
//     getBuilder(): BuilderType;
//     getModel(): string;
//     getType(): GuitarType;
//     getBackWood(): WoodType;
//     getTopWood(): WoodType;
//     getNumStrings(): number;
//     equals(guitarSpec: IGuitarSpec): boolean;
// }
// interface IInvernotry {
//     addGuitar(serialNumber: string, price: number, spec: IGuitarSpec);
//     getGuitar(serialNumber: string): IGuitar;
//     search(guitar: IGuitarSpec): IGuitar[];
// }
// enum GuitarType {
//     Unknown,
//     Acoustic,
//     Electric,
// }
// enum BuilderType {
//     Unknown,
//     Fender,
//     Martin,
//     Gibson,
//     Collings,
//     Olson,
//     Ryan,
//     PRS,
//     Any,
// }
// enum WoodType {
//     Unknown,
//     IndianRosewood,
//     BrazilianRosewoon,
//     Mahagany,
//     Maple,
//     Cocobolo,
//     Cedar,
//     Adirondack,
//     Alder,
//     Sitka,
// }
// class GuitarSpec implements IGuitarSpec {
//     builder: BuilderType;
//     model: string;
//     type: GuitarType;
//     backWood: WoodType;
//     topWood: WoodType;
//     numStrings: number;
//     constructor(
//         builder: BuilderType,
//         model: string,
//         type: GuitarType,
//         backWood: WoodType,
//         topWood: WoodType,
//         numStrings: number,
//     ) {
//         this.builder = builder;
//         this.model = model;
//         this.type = type;
//         this.backWood = backWood;
//         this.topWood = topWood;
//         this.numStrings = numStrings;
//     }
//     getBuilder(): BuilderType {
//         return this.builder;
//     }
//     getModel(): string {
//         return this.model;
//     }
//     getType(): GuitarType {
//         return this.type;
//     }
//     getBackWood(): WoodType {
//         return this.backWood;
//     }
//     getTopWood(): WoodType {
//         return this.topWood;
//     }
//     getNumStrings(): number {
//         return this.numStrings;
//     }
//     equals(guitarSpec: IGuitarSpec): boolean {
//         const model = guitarSpec.getModel().toLowerCase();
//         // const guiltarSpec = guitar.getSpec();
//         if (guitarSpec.getBuilder() !== this.builder) {
//             return false;
//         }
//         if (model && model !== this.model.toLowerCase()) {
//             return false;
//         }
//         if (guitarSpec.getType() !== this.type) {
//             return false;
//         }
//         if (guitarSpec.getBackWood() !== this.backWood) {
//             return false;
//         }
//         if (guitarSpec.getTopWood() !== this.topWood) {
//             return false;
//         }
//         if (guitarSpec.getNumStrings() !== this.numStrings) {
//             return false;
//         }
//         return true;
//     }
// }
// class Guitar implements IGuitar {
//     serialNumber: string;
//     price: number;
//     spec: IGuitarSpec;
//     constructor(
//         serialNumber: string,
//         price: number,
//         spec: IGuitarSpec,
//     ) {
//         this.serialNumber = serialNumber;
//         this.price = price;
//         this.spec = spec;
//     }
//     getSerialNumebr(): string {
//         return this.serialNumber;
//     }
//     getPrice(): number {
//         return this.price;
//     }
//     setPrice(price: number) {
//         this.price = price;
//     }
//     getSpec(): IGuitarSpec {
//         return this.spec;
//     }
// }
// class Invernotry implements IInvernotry {
//     private guitars: Guitar[];
//     constructor() {
//         this.guitars = [];
//     }
//     addGuitar(serialNumber: string, price: number, spec: IGuitarSpec) {
//         const guitar: Guitar = new Guitar(serialNumber, price, spec);
//         this.guitars.push(guitar);
//     }
//     getGuitar(serialNumber: string): Guitar {
//         return this.guitars.find(x => x.serialNumber === serialNumber)
//     }
//     search(searchGuitar: IGuitarSpec): IGuitar[] {
//         const foundGuitars: IGuitar[] = [];
//         for (const guitar of this.guitars) {
//             if (guitar.getSpec().equals(searchGuitar)) {
//                 foundGuitars.push(guitar);
//             }
//         }
//         return foundGuitars;
//     }
// }
// const inventory: Invernotry = new Invernotry();
// const erinGuitarSpec = new GuitarSpec(BuilderType.Fender, 'Stratocastor', GuitarType.Electric, WoodType.Alder, WoodType.Alder, 12);
// const whatErinLikes = new Guitar('', 0, erinGuitarSpec)
// // const whatMartinLikes = new Guitar('', 0, BuilderType.Martin, 'QM-18', GuitarType.Acoustic, WoodType.Mahagany, WoodType.Adirondack)
// initializeInventory(inventory);
// const guitars = inventory.search(erinGuitarSpec);
// if (guitars.length > 0) {
//     guitars.forEach(guitar => console.log(`Erin, you might like this ${guitar.getSpec().getBuilder()} ${guitar.spec.getModel()} ${guitar.spec.getType()} guitar:\n ${guitar.spec.getBackWood()} back and sides. \n ${guitar.spec.getTopWood()} top. \nYou can have it for only ${guitar.getPrice()}! \nGuiltar strings: ${guitar.getSpec().getNumStrings()}\n ----`))
// } else {
//     console.log('Sorry, Erin, we have nothing for you.');
// }
// function initializeInventory(inventory: Invernotry): void {
//     inventory.addGuitar('v95693', 1499.95, new GuitarSpec(BuilderType.Fender, 'Stratocastor', GuitarType.Electric, WoodType.Alder, WoodType.Alder, 12));
//     inventory.addGuitar('v958793', 999.95, new GuitarSpec(BuilderType.Fender, 'Stratocastor', GuitarType.Electric, WoodType.Alder, WoodType.Alder, 6));
// }
//# sourceMappingURL=guitarInnventory.js.map