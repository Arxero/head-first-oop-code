import { IBark } from '../Interfaces/IBark';

export class Bark implements IBark {
  private sound: string;

  constructor(sound: string) {
    this.sound = sound.toLowerCase();
  }

  getSound(): string {
    return this.sound;
  }

  equals(bark: Bark): boolean {
    if (bark instanceof Bark) {
      const otheBark = bark.getSound();
      if (this.sound.toLowerCase() === otheBark) {
        return true;
      }
    }
    return false;
  }

}
