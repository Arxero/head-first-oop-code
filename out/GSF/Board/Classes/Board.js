"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tile_1 = require("./Tile");
class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.initialize();
    }
    getTile(x, y) {
        const theTile = this.tiles[x - 1];
        return theTile[y - 1];
    }
    addUnit(unit, x, y) {
        const tile = this.getTile(x, y);
        tile.addUnit(unit);
    }
    getUnits(x, y) {
        return this.getTile(x, y).getUnits();
    }
    removeUnit(unit, x, y) {
        const tile = this.getTile(x, y);
        tile.removeUnit(unit);
    }
    removeUnits(x, y) {
        const tile = this.getTile(x, y);
        tile.removeUnits();
    }
    initialize() {
        this.tiles = [this.width];
        for (let i = 0; i < this.width; i++) {
            this.tiles.splice(i, 0, [this.height]);
            for (let j = 0; j < this.height; j++) {
                this.tiles[i] = new Tile_1.Tile();
            }
        }
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map