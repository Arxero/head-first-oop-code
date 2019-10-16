"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unit {
    constructor(id) {
        this.weapons = [];
        this.id = id;
    }
    setType(type) {
        console.log(`...Set type to ${type}`);
        this.type = type;
    }
    getType() {
        console.log(`...Getting type of ${this.type}`);
        return this.type;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addWeapon(weapon) {
        this.weapons.push(this.weapons);
    }
    getWeapons() {
        return this.weapons;
    }
    setProperty(property, value) {
        if (!this.properties) {
            this.properties = new Map();
        }
        console.log(`...Setting type of ${property} with value ${value}`);
        this.properties.set(property, value);
    }
    getProperty(property) {
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
exports.Unit = Unit;
//# sourceMappingURL=Unit.js.map