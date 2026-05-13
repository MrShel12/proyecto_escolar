import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Pet } from '../../component/pet/pet';

@Component({
  selector: 'app-pet-page',
  standalone: true,
  imports: [Navbar, Pet],
  templateUrl: './pet-page.html',
  styleUrl: './pet-page.css'
})
export class PetPage {

}