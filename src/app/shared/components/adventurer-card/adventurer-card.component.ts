import {Component, Input} from '@angular/core';
import {Adventurer} from "../../models/adventurer";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-adventurer-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './adventurer-card.component.html',
  styleUrl: './adventurer-card.component.css'
})
export class AdventurerCardComponent {
  @Input()
  adventurer!: Adventurer;
}
