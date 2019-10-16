"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Station {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    equals(obj) {
        if (obj instanceof Station) {
            if (obj.getName().toLowerCase() === this.name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    hashCode() {
        return this.name.toLowerCase().charCodeAt(5);
    }
}
exports.Station = Station;
//# sourceMappingURL=Station.js.map