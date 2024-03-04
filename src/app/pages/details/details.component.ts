import {Component, Input} from '@angular/core';
import {Adventurer} from "../../shared/models/adventurer";
import {AdventurerService} from "../../shared/services/adventurer.service";
import {Router} from "@angular/router";
import {AdventurerCardComponent} from "../../shared/components/adventurer-card/adventurer-card.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    AdventurerCardComponent,
    MatButtonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  adventurer: Adventurer;

  constructor(private adventurerService: AdventurerService, private router: Router){
    this.adventurer = adventurerService.getAdventurer();
    if(!this.adventurer) this.goHome();
  }

  goHome(): void{
    this.router.navigate(['/']);
  }
}
