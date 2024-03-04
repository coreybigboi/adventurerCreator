import { Injectable } from '@angular/core';
import {Adventurer} from "../models/adventurer";

@Injectable({
  providedIn: 'root'
})
export class AdventurerService {
  private adventurer!: Adventurer;
  constructor() { }

  setAdventurer(adventurer: Adventurer){
    this.adventurer = adventurer;
  }

  getAdventurer(): Adventurer{
    return this.adventurer;
  }
}
