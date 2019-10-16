"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = require("./Connection");
const Station_1 = require("./Station");
class Subway {
    constructor() {
        this.stations = [];
        this.connections = [];
    }
    addStation(name) {
        if (!this.hasStation(name)) {
            const station = new Station_1.Station(name);
            this.stations.push(station);
        }
    }
    hasStation(name) {
        return this.stations.some(x => x.getName() === name);
    }
    addConnection(station1Name, station2Name, lineName) {
        if (this.hasStation(station1Name) && this.hasStation(station2Name)) {
            const station1 = new Station_1.Station(station1Name);
            const station2 = new Station_1.Station(station2Name);
            const connection = new Connection_1.Connection(station1, station2, lineName);
            this.connections.push(connection);
            this.connections.push(new Connection_1.Connection(station2, station1, lineName));
        }
        else {
            throw new Error('Invalid Connection!');
        }
    }
}
exports.Subway = Subway;
//# sourceMappingURL=Subway.js.map