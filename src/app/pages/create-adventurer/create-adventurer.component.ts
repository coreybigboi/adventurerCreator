import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {provideNativeDateAdapter} from "@angular/material/core";
import {JsonPipe, NgFor} from '@angular/common';
import {Adventurer} from "../../shared/models/adventurer";
import {Class} from "../../shared/enums/class";
import {Race} from "../../shared/enums/race";
import {Alignment} from "../../shared/enums/alignment";


@Component({
  selector: 'app-create-adventurer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatRadioModule,
    MatCheckboxModule,
    JsonPipe,
    NgFor
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-adventurer.component.html',
  styleUrl: './create-adventurer.component.css'
})
export class CreateAdventurerComponent {

  characterform = this.formBuilder.group({
    characterDetails: this.formBuilder.group({
      nameControl: ['', Validators.required],
      raceControl: ['', Validators.required],
      dobControl:  ['', Validators.required],
      classControl:['', Validators.required],
    }),
    alignmentControl: [''],
    equipment: this.formBuilder.group({
      equipmentControls: this.formBuilder.array([]),
      goldPiecesControl: ['', Validators.required],
    }),
    backgroundControl: ['', Validators.required],
    agreesTermsControl: [false, Validators.requiredTrue],
  });

  get equipmentControls() {
    return this.characterform.get('equipment.equipmentControls') as FormArray;
  }

  constructor(private formBuilder: FormBuilder){}

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
      class: this.characterform.value.characterDetails?.classControl as Class ?? Class.Fighter,
      race: this.characterform.value.characterDetails?.raceControl as Race ?? Race.Human,
      alignment: this.characterform.value.alignmentControl as Alignment ?? Alignment.TrueNeutral,
      dob: this.characterform.value.characterDetails?.dobControl as string ?? Date.now(),
      background: this.characterform.value.backgroundControl ?? "",
      equipment: this.characterform.value.equipment?.equipmentControls as string[] ?? [],
      goldPieces: parseInt(this.characterform.value.equipment?.goldPiecesControl as string) ?? 0,
      agreesTerms: this.characterform.value.agreesTermsControl ?? false
    }
  }
}
