import { Module } from '@nestjs/common';
import { PostsService } from 'src/models/posts/posts.service';
import { PostsResolver } from 'src/models/posts/posts.resolver';

@Module({
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
