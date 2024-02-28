import { Component } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormControl} from "@angular/forms";

@Component({
  selector: 'app-create-adventurer',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-adventurer.component.html',
  styleUrl: './create-adventurer.component.css'
})
export class CreateAdventurerComponent {
  nameControl : FormControl<string | null> = new FormControl("");

}
