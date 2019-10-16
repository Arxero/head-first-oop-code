import { InstrumentType } from './../Enums/InstrumentType';
import { IInstrument } from './../Interfaces/IInstrument';
import { IInstrumentSpec } from './../Interfaces/IInstrumentSpec';

export class Instrument implements IInstrument {
  serialNumber: string;
  price: number;
  spec: IInstrumentSpec;
  instrumentType: InstrumentType;


  constructor(serialNumber: string, price: number, spec: IInstrumentSpec) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.spec = spec;
  }

  getSerialNumebr(): string {
    return this.serialNumber;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  getSpec(): IInstrumentSpec {
    return this.spec;
  }
}

