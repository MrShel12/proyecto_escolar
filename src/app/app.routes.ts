import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PetPage } from './pages/pet-page/pet-page';
export const routes: Routes = [

  {
    path:'',
    component: Home
  },
  
  {
    path:'pet',
    component: PetPage
  }

]; 