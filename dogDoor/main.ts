import { BarckRecognizer } from './Classes/BarckRecognizer';
import { Bark } from './Classes/Bark';
import { DogDoor } from './Classes/DogDoor';
import { Remote } from './Classes/Remote';

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

