"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instrument {
    constructor(serialNumber, price, spec) {
        this.serialNumber = serialNumber;
        this.price = price;
        this.spec = spec;
    }
    getSerialNumebr() {
        return this.serialNumber;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getSpec() {
        return this.spec;
    }
}
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map