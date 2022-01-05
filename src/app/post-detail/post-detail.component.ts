import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../_services/post';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post?: Post;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ps: PostService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ps.getPost(id)
      .subscribe(p => this.post = p);
  }

  goBack(): void {
    this.location.back();
  }
}
