// import { BuilderType } from '../Enums/BuilderType';
// import { GuitarType } from '../Enums/GuitarType';
// import { WoodType } from '../Enums/WoodType';
// import { IGuitarSpec } from '../Interfaces/IGuitarSpec';
// import { Instrument } from './Instrument';
// import { InstrumentSpec } from "./InstrumentSpec.1";
// export class GuitarSpec extends InstrumentSpec implements IGuitarSpec {
//   private numStrings: number;
//   constructor(
//     numStrings: number,
//     model: string,
//     builder: BuilderType,
//     type: GuitarType,
//     backWood: WoodType,
//     topWood: WoodType) {
//     super(model, builder, type, backWood, topWood);
//     this.numStrings = numStrings;
//   }
//   getNumStrings(): number {
//     return this.numStrings;
//   }
//   equals(guitarSpec: IGuitarSpec): boolean {
//     if (!super.equals(guitarSpec)) {
//       return false;
//     }
//     if (!(guitarSpec instanceof GuitarSpec)) {
//       return false;
//     }
//     if (guitarSpec.getNumStrings() !== this.numStrings) {
//       return false;
//     }
//     return true;
//   }
// }
//# sourceMappingURL=GuitarSpec.js.map