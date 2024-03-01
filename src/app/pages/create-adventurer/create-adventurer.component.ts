import { Component } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormArray, FormBuilder} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {provideNativeDateAdapter} from "@angular/material/core";
import { JsonPipe } from '@angular/common';
import { NgFor } from '@angular/common';


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
      nameControl: [''],
      raceControl: [''],
      dobControl:  [''],
      classControl:[''],
    }),
    alignmentControl: [''],
    equipment: this.formBuilder.group({
      equipmentControls: this.formBuilder.array([]),
      goldPiecesControl: [''],
    }),
    backgroundControl: [''],
    agreesTermsControl: [''],
  });

  get equipmentControls() {
    return this.characterform.get('equipment.equipmentControls') as FormArray;
  }
  
  constructor(private formBuilder: FormBuilder){}
  
  addEquipment(){
    this.equipmentControls.push(this.formBuilder.control(''));
  }

  removeEquipment(index: number){
    this.equipmentControls.removeAt(index);
  }

  handleSubmit(): void{

  }
}
