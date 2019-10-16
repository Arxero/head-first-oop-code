import { IInstrumentSpec } from './../Interfaces/IInstrumentSpec';

export class InstrumentSpec implements IInstrumentSpec {
  properties: Map<any, any>;

  constructor(properties: Map<any, any>) {
    if (properties == null) {
      this.properties = new Map();
    } else {
      this.properties = new Map(properties);
    }
  }

  getProperty(input: string): object {
    return this.properties.get(input);
  }

  getProperties(): Map<any, any> {
    return this.properties;
  }

  equals(otherSpec: IInstrumentSpec): boolean {
    for (const key of Object.keys(otherSpec.getProperties())) {
      if (this.properties.get(key) !== otherSpec.getProperty(key)) {
        return false;
      }
    }
    return true;
  }

}
