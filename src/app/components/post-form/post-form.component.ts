import { Component } from '@angular/core';
import { Post } from '../../models/postagens';
import { PostService } from '../../services/postagensapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  post: Post = { id: 0, title: '', body: '' };
  isEditMode = false;
  id: number = this.post.id;

  constructor(
    private postService: PostService, private router: Router, private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

   
    if (id) {
      this.isEditMode = true; 
      const postId = parseInt(id, 10); 

      this.postService.getAll().subscribe(posts => {
        const findPost = posts.find((p: { id: number; }) => p.id === postId);
        if (findPost) {
          this.post = findPost;
        }
      });
    }
  } 

  savePost(): void {
    if (this.isEditMode) {
      this.postService.update(this.id, this.post);
    } else {
      this.postService.create(this.post);
    }

    this.router.navigate(['/']);
  }
  
}
