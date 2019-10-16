"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Airplane {
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    fly() {
        console.log('Flying');
    }
}
exports.Airplane = Airplane;
class Jet extends Airplane {
    constructor() {
        super();
        this.multiplier = 2;
    }
    setSpeed(speed) {
        super.setSpeed(speed * this.multiplier);
    }
    accelerate() {
        this.setSpeed(this.getSpeed() * 2);
    }
}
exports.Jet = Jet;
const biplane = new Airplane();
biplane.setSpeed(200);
// biplane.speed = 300;
console.log('Biplane Speed: ' + biplane.getSpeed());
const boeing = new Jet();
boeing.setSpeed(800);
console.log('Jet Speed: ' + boeing.getSpeed());
console.log('Engine started...');
let x = 0;
while (x < 4) {
    console.log('Accelerating');
    boeing.accelerate();
    console.log('Current speed: ' + boeing.getSpeed());
    if (boeing.getSpeed() > 5000) {
        biplane.setSpeed(biplane.getSpeed() * 2);
    }
    else {
        boeing.accelerate();
    }
    x++;
    console.log(biplane.getSpeed());
}
//# sourceMappingURL=airplane.js.map