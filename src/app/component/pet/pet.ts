import { Component } from '@angular/core';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [],
  templateUrl: './pet.html',
  styleUrl: './pet.css'
})
export class Pet {

  hunger = 70;
  happiness = 60;
  energy = 80;

  message = 'Hola 🌸';

  feedPet(){
    this.hunger += 10;
    this.message = 'Gracias por alimentarme 🍎';
  }

  petPet(){
    this.happiness += 10;
    this.message = 'Eso me hace feliz 😊';
  }

  sleepPet(){
    this.energy += 10;
    this.message = 'Que buena siesta 😴';
  }

}