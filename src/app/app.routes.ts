import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreateAdventurerComponent} from "./pages/create-adventurer/create-adventurer.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateAdventurerComponent}
];
