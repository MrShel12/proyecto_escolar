import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum {

  newPost = '';

  posts = [
    {
      username:'Ana',
      message:'Hoy tuve un mejor día 🌸'
    },
    {
      username:'Luis',
      message:'Recuerda descansar 💙'
    }
  ];

  publishPost(){

    if(this.newPost.trim() !== ''){

      this.posts.unshift({
        username:'Usuario',
        message:this.newPost
      });

      this.newPost = '';

    }

  }

}