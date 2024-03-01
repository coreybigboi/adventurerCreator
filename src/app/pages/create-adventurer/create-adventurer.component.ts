import { Component } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormControl, FormGroup} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio"
import {provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-create-adventurer',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatRadioModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-adventurer.component.html',
  styleUrl: './create-adventurer.component.css'
})
export class CreateAdventurerComponent {

  characterform = new FormGroup({
    characterDetails: new FormGroup({
      nameControl: new FormControl(""),
      raceControl: new FormControl(""),
      dobControl: new FormControl(""),
      classControl: new FormControl(),
    }),
    alignmentControl: new FormControl(),
    equipment: new FormGroup({
      equipmentControl: new FormControl(""),
      goldPiecesControl: new FormControl(""),
    }),
    backgroundControl: new FormControl(""),
    agreesTermsControl: new FormControl(""),
  });

  handleSubmit(): void{

  }
}
