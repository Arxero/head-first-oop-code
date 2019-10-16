"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BarckRecognizer_1 = require("./Classes/BarckRecognizer");
const Bark_1 = require("./Classes/Bark");
const DogDoor_1 = require("./Classes/DogDoor");
const Remote_1 = require("./Classes/Remote");
// Dog Door Simulator
const door = new DogDoor_1.DogDoor();
const remote = new Remote_1.Remote(door);
const barckRecognizer = new BarckRecognizer_1.BarckRecognizer(door);
door.addAllowedBark(new Bark_1.Bark('bark'));
door.addAllowedBark(new Bark_1.Bark('woof'));
console.log('Frido barks to go outside...');
const bark = new Bark_1.Bark('woof');
barckRecognizer.recognize(bark);
// remote.pressButton();
console.log('\nFrido has gone outside...');
console.log('\nFrido is all done...');
setTimeout(() => {
    console.log('Random dog barks...');
    barckRecognizer.recognize(new Bark_1.Bark('yuip'));
}, 3000);
setTimeout(() => {
    console.log('\nFrido barks');
    barckRecognizer.recognize(bark);
    // remote.pressButton();
    console.log('\nFrido is back inside...');
}, 5000);
//# sourceMappingURL=main.js.map