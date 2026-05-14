import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PetPage } from './pages/pet-page/pet-page';
import { Component } from '@angular/core';
import { Navbar } from './component/navbar/navbar';
import { Forum } from './component/forum/forum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-page',
  standalone: true,
  imports: [Navbar, Forum],
  template: `<app-navbar></app-navbar><app-forum></app-forum>`
})
class ForumPageComponent { }

export const routes: Routes = [

  {
    path:'',
    component: Home
  },
  
  {
    path:'pet',
    component: PetPage
  },

  {
    path:'forum',
    component: ForumPageComponent
  }

];