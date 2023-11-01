import { Injectable } from '@nestjs/common';
import { Post } from 'src/models/posts/posts.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { title: 'Hello', body: 'This is a post', username: 'arthur' },
  ];

  create(post: Post) {
    this.posts.push(post);
  }

  getAll() {
    return this.posts;
  }

  getAllByUsername(username: string) {
    return this.posts.filter(p => p.username === username);
  }
}
