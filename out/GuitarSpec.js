class GuitarSpec {
    constructor(builder, model, type, backWood, topWood, numStrings) {
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backWood = backWood;
        this.topWood = topWood;
        this.numStrings = numStrings;
    }
    getBuilder() {
        return this.builder;
    }
    getModel() {
        return this.model;
    }
    getType() {
        return this.type;
    }
    getBackWood() {
        return this.backWood;
    }
    getTopWood() {
        return this.topWood;
    }
    getNumStrings() {
        return this.numStrings;
    }
    equals(guitarSpec) {
        const model = guitarSpec.getModel().toLowerCase();
        // const guiltarSpec = guitar.getSpec();
        if (guitarSpec.getBuilder() !== this.builder) {
            return false;
        }
        if (model && model !== this.model.toLowerCase()) {
            return false;
        }
        if (guitarSpec.getType() !== this.type) {
            return false;
        }
        if (guitarSpec.getBackWood() !== this.backWood) {
            return false;
        }
        if (guitarSpec.getTopWood() !== this.topWood) {
            return false;
        }
        if (guitarSpec.getNumStrings() !== this.numStrings) {
            return false;
        }
        return true;
    }
}
//# sourceMappingURL=GuitarSpec.js.map