import { IWeapon } from '../Interfaces/IWeapon';
import { IUnit } from './../Interfaces/IUnit';


export class Unit implements IUnit {
  id: number;
  name: string;
  weapons: IWeapon[] = [];
  type: string;
  properties: Map<any, any>;


  constructor(id: number) {
    this.id = id;
  }

  setType(type: string): void {
    console.log(`...Set type to ${type}`);
    this.type = type;
  }

  getType(): string {
    console.log(`...Getting type of ${this.type}`);
    return this.type;
  }

  getId(): number {
    return this.id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addWeapon(weapon: IWeapon): void {
    this.weapons.push(this.weapons);
  }

  getWeapons(): IWeapon[] {
    return this.weapons;
  }

  setProperty(property: string, value: any): void {
    if (!this.properties) {
      this.properties = new Map();
    }
    console.log(`...Setting type of ${property} with value ${value}`);
    this.properties.set(property, value);
  }

  getProperty(property: string): any {
    if (!this.properties) {
      throw new Error('No properties for this unit.');
    }
    const value = this.properties.get(property);
    console.log(`...Getting type of ${property} with value ${value}`);
    if (!value) {
      throw new Error('The requested property does not exist.');
    }
    return value;
  }

}
