import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  username: string;
  message: string;
  likes: number;
  liked: boolean;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forum.html',
  styleUrl: './forum.css'
})
export class Forum {

  newPost = '';
  nextId = 3;

  posts: Post[] = [
    {
      id: 1,
      username:'Ana',
      message:'Hoy tuve un mejor día 🌸',
      likes: 5,
      liked: false
    },
    {
      id: 2,
      username:'Luis',
      message:'Recuerda descansar 💙',
      likes: 3,
      liked: false
    }
  ];

  publishPost(){

    if(this.newPost.trim() !== ''){

      this.posts.unshift({
        id: this.nextId++,
        username:'Tú',
        message:this.newPost,
        likes: 0,
        liked: false
      });

      this.newPost = '';

    }

  }

  toggleLike(post: Post){
    if(post.liked){
      post.likes--;
      post.liked = false;
    } else {
      post.likes++;
      post.liked = true;
    }
  }

}