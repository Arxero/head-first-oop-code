"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnitGroup {
    constructor(unitList) {
        this.units = new Map();
        unitList.forEach(x => {
            this.units.set(x.id, x);
        });
    }
    addUnit(unit) {
        this.units.set(unit.id, unit);
    }
    removeUnit(unit) {
        this.units.delete(unit.id);
    }
    removeUnitById(id) {
        this.units.delete(id);
    }
    getUnit(id) {
        return this.units.get(id);
    }
    getUnits() {
        const unitList = [];
        this.units.forEach(x => unitList.push(x));
        return unitList;
    }
}
exports.UnitGroup = UnitGroup;
//# sourceMappingURL=UnitGroup.js.map