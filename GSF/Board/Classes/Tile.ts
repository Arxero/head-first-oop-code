import { IUnit } from '../Interfaces/IUnit';
import { ITile } from './../Interfaces/ITile';

export class Tile implements ITile {
  private units: IUnit[];

  constructor() {
    this.units = [];
  }

  addUnit(unit: IUnit): void {
    this.units.push(unit);
  }

  getUnits(): IUnit[] {
    return null;
  }

  removeUnit(unit: IUnit): void {
    this.units = this.units.filter(x => x !== unit);
  }

  removeUnits(): void {
    throw new Error('Method not implemented.');
  }

}
