import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from 'src/models/posts/posts.service';
import { Post } from 'src/models/posts/posts.entity';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(returns => [Post])
  async getPosts() {
    return await this.postsService.getAll();
  }
}
