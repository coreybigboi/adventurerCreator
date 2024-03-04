import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {provideNativeDateAdapter} from "@angular/material/core";
import {JsonPipe, NgFor} from '@angular/common';
import {Adventurer} from "../../shared/models/adventurer";
import {CharacterClass} from "../../shared/enums/characterClass";
import {Race} from "../../shared/enums/race";
import {Alignment} from "../../shared/enums/alignment";
import {AdventurerService} from "../../shared/services/adventurer.service";
import {Router} from "@angular/router";
import {Gender} from "../../shared/enums/gender";


@Component({
  selector: 'app-create-adventurer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    JsonPipe,
    NgFor,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-adventurer.component.html',
  styleUrl: './create-adventurer.component.css'
})
export class CreateAdventurerComponent {

  // stores enum values
  classes: string[];
  races: string[];
  alignments: string[];
  genders: string[];

  characterform = this.formBuilder.group({
    characterDetails: this.formBuilder.group({
      nameControl: ['', Validators.required],
      raceControl: ['', Validators.required],
      genderControl:  ['', Validators.required],
      classControl:['', Validators.required],
    }),
    alignmentControl: [''],
    equipment: this.formBuilder.group({
      equipmentControls: this.formBuilder.array([]),
      goldPiecesControl: [0, Validators.required],
    }),
    backgroundControl: ['', Validators.required],
    agreesTermsControl: [false, Validators.requiredTrue],
  });

  get equipmentControls() {
    return this.characterform.get('equipment.equipmentControls') as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private adventurerService: AdventurerService, private router: Router){
    this.classes = Object.values(CharacterClass);
    this.races = Object.values(Race);
    this.alignments = Object.values(Alignment);
    this.genders = Object.values(Gender);
  }

  addEquipment(){
    this.equipmentControls.push(this.formBuilder.control('', Validators.required));
  }

  removeEquipment(index: number){
    this.equipmentControls.removeAt(index);
  }

  handleSubmit(): void{
    if(!this.characterform.valid) return;
    let character: Adventurer = {
      name: this.characterform.value.characterDetails?.nameControl ?? "",
      class: this.characterform.value.characterDetails?.classControl as CharacterClass ?? CharacterClass.Fighter,
      race: this.characterform.value.characterDetails?.raceControl as Race ?? Race.Human,
      gender: this.characterform.value.characterDetails?.genderControl as Gender ?? Gender.NonSpecified,
      alignment: this.characterform.value.alignmentControl as Alignment ?? Alignment.TrueNeutral,
      background: this.characterform.value.backgroundControl ?? "",
      equipment: this.characterform.value.equipment?.equipmentControls as string[] ?? [],
      goldPieces: this.characterform.value.equipment?.goldPiecesControl ?? 0,
      agreesTerms: this.characterform.value.agreesTermsControl ?? false
    }
    this.adventurerService.setAdventurer(character);
    this.router.navigate(['/details']);
  }
}
