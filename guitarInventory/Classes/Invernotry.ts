import { IInstrument } from '../Interfaces/IInstrument';
import { IInvernotry } from '../Interfaces/IInvernotry';
import { IInstrumentSpec } from './../Interfaces/IInstrumentSpec';
import { Instrument } from './Instrument';

export class Invernotry implements IInvernotry {
  private instuments: IInstrument[];

  constructor() {
    this.instuments = [];
  }

  addInstrument(serialNumber: string, price: number, spec: IInstrumentSpec) {
    const instrument = new Instrument(serialNumber, price, spec);
    this.instuments.push(instrument);
  }

  getInstrument(serialNumber: string): IInstrument {
    return this.instuments.find(x => x.serialNumber === serialNumber);
  }

  search(searchedInsrument: IInstrumentSpec): IInstrument[] {
    const foundInstruments: IInstrument[] = [];
    for (const instrument of this.instuments) {
      if (instrument.getSpec().equals(searchedInsrument)) {
        foundInstruments.push(instrument);
      }
    }
    return foundInstruments;
  }

}
