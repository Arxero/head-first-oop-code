// import { BuilderType } from '../Enums/BuilderType';
// import { GuitarType } from '../Enums/GuitarType';
// import { Style } from '../Enums/MandolinStyle';
// import { WoodType } from '../Enums/WoodType';
// import { IMandolinSpec } from './../Interfaces/IMandolinSpec';
// import { InstrumentSpec } from './InstrumentSpec';
// export class MandolinSpec extends InstrumentSpec implements IMandolinSpec {
//   private style: Style;
//   constructor(
//     style: Style,
//     model: string,
//     builder: BuilderType,
//     type: GuitarType,
//     backWood: WoodType,
//     topWood: WoodType) {
//     super(model, builder, type, backWood, topWood);
//     this.style = style;
//   }
//   getStyle(): Style {
//     return this.style;
//   }
//   equals(mandolinSpec: MandolinSpec) {
//     if (!super.equals(mandolinSpec)) {
//       return false;
//     }
//     if (!(mandolinSpec instanceof MandolinSpec)) {
//       return false;
//     }
//     if (mandolinSpec.getStyle() !== this.style) {
//       return false;
//     }
//     return true;
//   }
// }
//# sourceMappingURL=MandolineSpec.js.map