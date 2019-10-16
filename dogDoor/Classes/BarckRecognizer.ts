import { IBarkRecognizer } from '../Interfaces/IBarkRecognizer';
import { Bark } from './Bark';
import { DogDoor } from './DogDoor';

export class BarckRecognizer implements IBarkRecognizer {
  private door: DogDoor;

  constructor(doorIn: DogDoor) {
    this.door = doorIn;
  }

  recognize(bark: Bark): void {
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
