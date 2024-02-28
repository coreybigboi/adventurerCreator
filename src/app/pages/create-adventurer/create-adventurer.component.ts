import { Component } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormControl, FormGroup} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {Race} from "../../shared/enums/race";

@Component({
  selector: 'app-create-adventurer',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule, MatSelectModule],
  templateUrl: './create-adventurer.component.html',
  styleUrl: './create-adventurer.component.css'
})
export class CreateAdventurerComponent {

  characterform = new FormGroup({
    nameControl: new FormControl(""),
    classControl: new FormControl(""),
    raceControl: new FormControl(""),
    alignmentControl: new FormControl(""),
    dobControl: new FormControl(""),
    backgroundControl: new FormControl(""),
    equipmentControl: new FormControl(""),
    goldPiecesControl: new FormControl(""),
    agreesTermsControl: new FormControl(""),
  });

  handleSubmit(): void{

  }
}
