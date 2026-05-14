import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet.html',
  styleUrl: './pet.css'
})
export class Pet {

  hunger = 70;
  happiness = 60;
  energy = 80;

  message = 'Hola 🌸';
  
  currentFrameIndex = 0;
  isAnimating = false;

  // Frames para cada acción
  feedFrames = ['/feed-1.png', '/feed-2.png'];
  petFrames = ['/pet-1.png', '/pet-2.png'];
  sleepFrames = ['/sleep-1.png'];
  defaultFrame = '/prueba.png';
  
  currentFrame = this.defaultFrame;

  feedPet(){
    if(this.isAnimating) return;
    this.playAnimation(this.feedFrames, 'Gracias por alimentarme 🍎');
    this.hunger += 10;
  }

  petPet(){
    if(this.isAnimating) return;
    this.playAnimation(this.petFrames, 'Eso me hace feliz 😊');
    this.happiness += 10;
  }

  sleepPet(){
    if(this.isAnimating) return;
    this.playAnimation(this.sleepFrames, 'Que buena siesta 😴');
    this.energy += 10;
  }

  private playAnimation(frames: string[], newMessage: string) {
    this.isAnimating = true;
    this.message = newMessage;
    this.currentFrameIndex = 0;

    const animationInterval = setInterval(() => {
      this.currentFrame = frames[this.currentFrameIndex];
      this.currentFrameIndex++;

      if (this.currentFrameIndex >= frames.length) {
        clearInterval(animationInterval);
        this.currentFrame = this.defaultFrame;
        this.isAnimating = false;
      }
    }, 400);
  }

}