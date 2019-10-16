import { IWeapon } from './IWeapon';

export interface IUnit {
  type: string;
  id: number;
  name: string;
  weapons: IWeapon[];
  properties: Map<any, any>;

  setType(type: string): void;
  getType(): string;
  getId(): number;

  setName(name: string): void;
  getName(): string;

  addWeapon(weapon: IWeapon): void;
  getWeapons(): IWeapon[];

  setProperty(property: string, value: any): void;
  getProperty(property: string): any;

}
