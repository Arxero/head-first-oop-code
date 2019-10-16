"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InstrumentSpec {
    constructor(properties) {
        if (properties == null) {
            this.properties = new Map();
        }
        else {
            this.properties = new Map(properties);
        }
    }
    getProperty(input) {
        return this.properties.get(input);
    }
    getProperties() {
        return this.properties;
    }
    equals(otherSpec) {
        for (const key of Object.keys(otherSpec.getProperties())) {
            if (this.properties.get(key) !== otherSpec.getProperty(key)) {
                return false;
            }
        }
        return true;
    }
}
exports.InstrumentSpec = InstrumentSpec;
//# sourceMappingURL=InstrumentSpec.js.map