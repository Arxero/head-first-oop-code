import { Bark } from '../Classes/Bark';

export interface IBark {
  getSound(): string;
  equals(bark: Bark): boolean;
}

