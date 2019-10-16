import { IRemote } from '../Interfaces/IRemote';
import { DogDoor } from './DogDoor';

export class Remote implements IRemote {
  private door: DogDoor;

  constructor(doorIn: DogDoor) {
    this.door = doorIn;
  }

  pressButton(): void {
    console.log('Pressing the remote control button...');
    if (this.door.isOpen()) {
      this.door.close();
    } else {
      this.door.open();
    }
  }

}

