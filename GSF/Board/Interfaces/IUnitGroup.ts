import { IUnit } from './IUnit';
export interface IUnitGroup {
  
  addUnit(unit: IUnit): void;
  removeUnit(unit: IUnit): void;
  removeUnitById(id: number): void;

  getUnit(id: string): IUnit;
  getUnits(): IUnit[];
}
