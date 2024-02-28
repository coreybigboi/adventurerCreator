import {Class} from "../enums/class";
import {Race} from "../enums/race";
import {Alignment} from "../enums/alignment";

export interface Adventurer{
  name: string,
  class: Class,
  race: Race,
  alignment: Alignment,
  dob: string,
  background: string,
  equipment: string[],
  goldPieces: number,
  agreesTerms: boolean
}
