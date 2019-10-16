import { IDogDoor } from '../Interfaces/IDogDoor';
import { Bark } from './Bark';

export class DogDoor implements IDogDoor {
  private isDoorOpen: boolean;
  private allowedBarks: Bark[] = [];

  constructor() {
    this.isDoorOpen = false;
  }

  open(): void {
    this.isDoorOpen = true;
    console.log('The dog door opens.');
    this.autoClose();
  }

  close(): void {
    this.isDoorOpen = false;
    console.log('The dog door closes.');
  }

  isOpen(): boolean {
    return this.isDoorOpen;
  }

  autoClose(): void {
    setTimeout(() => {
      this.close();
    }, 2000);
  }

  addAllowedBark(bark: Bark): void {
    this.allowedBarks.push(bark);
  }

  getAllowedBarks(): Bark[] {
    return this.allowedBarks;
  }

}
