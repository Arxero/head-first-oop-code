import { ITile } from '../Interfaces/ITile';
import { IUnit } from '../Interfaces/IUnit';
import { IBoard } from './../Interfaces/IBoard';
import { Tile } from './Tile';

export class Board implements IBoard {
  width: number;
  height: number;
  tiles: any[];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialize();
  }

  getTile(x: number, y: number): ITile {
    const theTile = this.tiles[x - 1];
    return theTile[y - 1];
  }

  addUnit(unit: IUnit, x: number, y: number): void {
    const tile = this.getTile(x, y);
    tile.addUnit(unit);
  }

  getUnits(x: number, y: number): IUnit[] {
    return this.getTile(x, y).getUnits();
  }

  removeUnit(unit: IUnit, x: number, y: number): void {
    const tile = this.getTile(x, y);
    tile.removeUnit(unit);
  }
  removeUnits(x: number, y: number): void {
    const tile = this.getTile(x, y);
    tile.removeUnits();
  }


  private initialize() {
    this.tiles = [this.width];
    for (let i = 0; i < this.width; i++) {
      this.tiles.splice(i, 0, [this.height]);
      for (let j = 0; j < this.height; j++) {
        this.tiles[i] = new Tile();
      }
    }
  }

}

