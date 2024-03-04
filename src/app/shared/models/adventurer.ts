import {CharacterClass} from "../enums/characterClass";
import {Race} from "../enums/race";
import {Alignment} from "../enums/alignment";

export interface Adventurer{
  name: string,
  class: CharacterClass,
  race: Race,
  alignment: Alignment,
  dob: string,
  background: string,
  equipment: string[],
  goldPieces: number,
  agreesTerms: boolean
}
