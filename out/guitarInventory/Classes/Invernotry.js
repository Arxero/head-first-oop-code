"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instrument_1 = require("./Instrument");
class Invernotry {
    constructor() {
        this.instuments = [];
    }
    addInstrument(serialNumber, price, spec) {
        const instrument = new Instrument_1.Instrument(serialNumber, price, spec);
        this.instuments.push(instrument);
    }
    getInstrument(serialNumber) {
        return this.instuments.find(x => x.serialNumber === serialNumber);
    }
    search(searchedInsrument) {
        const foundInstruments = [];
        for (const instrument of this.instuments) {
            if (instrument.getSpec().equals(searchedInsrument)) {
                foundInstruments.push(instrument);
            }
        }
        return foundInstruments;
    }
}
exports.Invernotry = Invernotry;
//# sourceMappingURL=Invernotry.js.map