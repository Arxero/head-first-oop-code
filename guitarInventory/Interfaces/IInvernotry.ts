import { IInstrument } from './IInstrument';
import { IInstrumentSpec } from './IInstrumentSpec';


export interface IInvernotry {
  addInstrument(serialNumber: string, price: number, spec: IInstrumentSpec);
  getInstrument(serialNumber: string): IInstrument;
  search(instrument: IInstrumentSpec): IInstrument[];
}
