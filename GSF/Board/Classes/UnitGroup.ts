import { IUnit } from '../Interfaces/IUnit';
import { IUnitGroup } from './../Interfaces/IUnitGroup';

export class UnitGroup implements IUnitGroup {
  units: Map<any, any>;


  constructor(unitList: IUnit[]) {
    this.units = new Map();
    unitList.forEach(x => {
      this.units.set(x.id, x);
    });
  }

  addUnit(unit: IUnit): void {
    this.units.set(unit.id, unit);
  }

  removeUnit(unit: IUnit): void {
    this.units.delete(unit.id);
  }

  removeUnitById(id: number): void {
    this.units.delete(id);
  }

  getUnit(id: string): IUnit {
    return this.units.get(id);
  }

  getUnits(): IUnit[] {
    const unitList = [];
    this.units.forEach(x => unitList.push(x));
    return unitList;

  }


}
