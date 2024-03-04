import {Component, Input} from '@angular/core';
import {Adventurer} from "../../shared/models/adventurer";
import {AdventurerService} from "../../shared/services/adventurer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  adventurer: Adventurer;

  constructor(private adventurerService: AdventurerService, private router: Router){
    this.adventurer = adventurerService.getAdventurer();
    if(!this.adventurer) router.navigate(['/'])
  }
}
