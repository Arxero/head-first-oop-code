"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DogDoor {
    constructor() {
        this.allowedBarks = [];
        this.isDoorOpen = false;
    }
    open() {
        this.isDoorOpen = true;
        console.log('The dog door opens.');
        this.autoClose();
    }
    close() {
        this.isDoorOpen = false;
        console.log('The dog door closes.');
    }
    isOpen() {
        return this.isDoorOpen;
    }
    autoClose() {
        setTimeout(() => {
            this.close();
        }, 2000);
    }
    addAllowedBark(bark) {
        this.allowedBarks.push(bark);
    }
    getAllowedBarks() {
        return this.allowedBarks;
    }
}
class Remote {
    constructor(doorIn) {
        this.door = doorIn;
    }
    pressButton() {
        console.log('Pressing the remote control button...');
        if (this.door.isOpen()) {
            this.door.close();
        }
        else {
            this.door.open();
        }
    }
}
class BarckRecognizer {
    constructor(doorIn) {
        this.door = doorIn;
    }
    recognize(bark) {
        for (const allowedBark of this.door.getAllowedBarks()) {
            if (allowedBark.equals(bark)) {
                console.log('Bark recognizer opens the door...');
                this.door.open();
                return;
            }
        }
        console.log('This dog is not allowed.');
    }
}
class Bark {
    constructor(sound) {
        this.sound = sound.toLowerCase();
    }
    getSound() {
        return this.sound;
    }
    equals(bark) {
        if (bark instanceof Bark) {
            const otheBark = bark.getSound();
            if (this.sound.toLowerCase() === otheBark) {
                return true;
            }
        }
        return false;
    }
}
exports.Bark = Bark;
// Dog Door Simulator
const door = new DogDoor();
const remote = new Remote(door);
const barckRecognizer = new BarckRecognizer(door);
door.addAllowedBark(new Bark('bark'));
door.addAllowedBark(new Bark('woof'));
console.log('Frido barks to go outside...');
const bark = new Bark('woof');
barckRecognizer.recognize(bark);
// remote.pressButton();
console.log('\nFrido has gone outside...');
console.log('\nFrido is all done...');
setTimeout(() => {
    console.log('Random dog barks...');
    barckRecognizer.recognize(new Bark('yuip'));
}, 3000);
setTimeout(() => {
    console.log('\nFrido barks');
    barckRecognizer.recognize(bark);
    // remote.pressButton();
    console.log('\nFrido is back inside...');
}, 5000);
//# sourceMappingURL=dogDoor.js.map