import { Bark } from "../Classes/Bark";
export interface IDogDoor {
  open(): void;
  close(): void;
  isOpen(): boolean;
  autoClose(): void;
  addAllowedBark(bark: Bark): void;
  getAllowedBarks(): Bark[];
}
