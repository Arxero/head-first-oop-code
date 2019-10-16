export interface IAirPlane {
    // speed: number;
    wheight: number;
    color: string;
    getSpeed(): number;
    setSpeed(speed: number): void;
    fly(): void;
}

export class Airplane implements IAirPlane {
    wheight: number;
    color: string;
    private speed: number;

    getSpeed(): number {
        return this.speed;
    }
    setSpeed(speed: number): void {
        this.speed = speed;
    }

    fly(): void {
        console.log('Flying');
    }
}

export class Jet extends Airplane {
    multiplier: number = 2;

    constructor() {
        super();
    }

    setSpeed(speed: number): void {
        super.setSpeed(speed * this.multiplier);
    }
    accelerate() {
        this.setSpeed(this.getSpeed() * 2);
    }

}

const biplane: Airplane = new Airplane();
biplane.setSpeed(200);
// biplane.speed = 300;
console.log('Biplane Speed: ' + biplane.getSpeed());

const boeing: Jet = new Jet();
boeing.setSpeed(800);
console.log('Jet Speed: ' + boeing.getSpeed());

console.log('Engine started...');

let x: number = 0;

while (x < 4) {
    console.log('Accelerating');
    boeing.accelerate();
    console.log('Current speed: ' + boeing.getSpeed());

    if (boeing.getSpeed() > 5000) {
        biplane.setSpeed(biplane.getSpeed() * 2);
    } else {
        boeing.accelerate();
    }
    x++;

    console.log(biplane.getSpeed());
}

