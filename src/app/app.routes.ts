import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreateAdventurerComponent} from "./pages/create-adventurer/create-adventurer.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateAdventurerComponent},
  {path: 'about', component: AboutComponent}
];
