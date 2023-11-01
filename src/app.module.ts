import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { PostsModule } from './models/posts/posts.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
