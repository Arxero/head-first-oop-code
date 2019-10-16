"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tile {
    constructor() {
        this.units = [];
    }
    addUnit(unit) {
        this.units.push(unit);
    }
    getUnits() {
        return null;
    }
    removeUnit(unit) {
        this.units = this.units.filter(x => x !== unit);
    }
    removeUnits() {
        throw new Error('Method not implemented.');
    }
}
exports.Tile = Tile;
//# sourceMappingURL=Tile.js.map