import {Component, Input} from '@angular/core';
import {Adventurer} from "../../shared/models/adventurer";
import {AdventurerService} from "../../shared/services/adventurer.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {AdventurerCardComponent} from "../../shared/components/adventurer-card/adventurer-card.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    AdventurerCardComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  adventurer: Adventurer;

  constructor(private adventurerService: AdventurerService, private router: Router){
    this.adventurer = adventurerService.getAdventurer();
    if(!this.adventurer) router.navigate(['/']);
  }
}
