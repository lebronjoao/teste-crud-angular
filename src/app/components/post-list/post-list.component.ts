import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../models/postagens';
import { PostService } from '../../services/postagensapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postagens: Post[] = [];

  constructor(private postagensService: PostService, private router: Router) {
    this.postagensService.getAll().subscribe(data => this.postagens = data);
  }

  deletePostagens(id:number): void {this.postagensService.delete(id);
  this.postagensService.getAll().subscribe(data => {
    this.postagens = data;
  });
  }

  editPostagem(postagem:Post): void {
    this.router.navigate(['/edit', postagem.id]);
  }

  addPostagem(): void {
    this.router.navigate(['/add']);
  }
}
