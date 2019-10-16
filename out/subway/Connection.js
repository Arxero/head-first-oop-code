"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connection {
    constructor(station1, station2, lineName) {
        this.station1 = station1;
        this.station2 = station2;
        this.lineName = lineName;
    }
    getStation1() {
        return this.station1;
    }
    getStation2() {
        return this.station2;
    }
    getLineName() {
        return this.lineName;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=Connection.js.map