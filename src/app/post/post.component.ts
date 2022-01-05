import { Component, OnInit } from '@angular/core';
import { Post } from '../_services/post';
import {PostService} from '../_services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private ps: PostService) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost(): void {
    this.ps.getPosts()
        .subscribe(p => this.posts = p);
  }

}
