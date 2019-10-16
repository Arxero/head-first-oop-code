import { BuilderType } from '../Enums/BuilderType';
import { Type } from '../Enums/Type';
import { WoodType } from '../Enums/WoodType';

export interface IInstrumentSpec {
  properties: Map<any, any>;

  getProperty(input: string): object;
  getProperties(): Map<any, any>;
  equals(otherSpec: IInstrumentSpec): boolean;
}
