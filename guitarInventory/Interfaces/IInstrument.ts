import { InstrumentType } from '../Enums/InstrumentType';
import { IInstrumentSpec } from './IInstrumentSpec';

export interface IInstrument {
  serialNumber: string;
  price: number;
  instrumentType: InstrumentType;

  getSerialNumebr(): string;
  getPrice(): number;
  setPrice(price: number);
  getSpec(): IInstrumentSpec;
}
