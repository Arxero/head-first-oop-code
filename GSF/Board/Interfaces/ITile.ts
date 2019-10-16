import { IUnit } from './IUnit';

export interface ITile {
  addUnit(unit: IUnit): void;
  removeUnit(unit: IUnit): void;
  removeUnits(): void;
  getUnits(): IUnit[];
}

