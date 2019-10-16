import { ITile } from './ITile';
import { IUnit } from './IUnit';


export interface IBoard {
  width: number;
  height: number;
  tiles: any[];

  getTile(x: number, y: number): ITile;
  addUnit(unit: IUnit, x: number, y: number): void;

  removeUnit(unit: IUnit, x: number, y: number): void;
  removeUnits(x: number, y: number): void;

  getUnits(x: number, y: number): IUnit[];
}


