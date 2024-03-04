import {CharacterClass} from "../enums/characterClass";
import {Race} from "../enums/race";
import {Alignment} from "../enums/alignment";
import {Gender} from "../enums/gender";

export interface Adventurer{
  name: string,
  class: CharacterClass,
  race: Race,
  gender: Gender,
  alignment: Alignment,
  background: string,
  equipment: string[],
  goldPieces: number,
  agreesTerms: boolean
}
