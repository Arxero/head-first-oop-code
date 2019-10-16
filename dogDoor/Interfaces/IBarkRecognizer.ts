import { Bark } from '../Classes/Bark';

export interface IBarkRecognizer {
  recognize(sound: Bark): void;
}

