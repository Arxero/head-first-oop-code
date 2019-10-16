class Invernotry {
    constructor() {
        this.guitars = [];
    }
    addGuitar(serialNumber, price, spec) {
        const guitar = new Guitar(serialNumber, price, spec);
        this.guitars.push(guitar);
    }
    getGuitar(serialNumber) {
        return this.guitars.find(x => x.serialNumber === serialNumber);
    }
    search(searchGuitar) {
        const foundGuitars = [];
        for (const guitar of this.guitars) {
            if (guitar.getSpec().equals(searchGuitar)) {
                foundGuitars.push(guitar);
            }
        }
        return foundGuitars;
    }
}
//# sourceMappingURL=Invernotry.js.map