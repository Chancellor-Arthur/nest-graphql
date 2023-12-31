import { InputType, Field, ArgsType } from 'type-graphql';

@InputType()
export class CreateUserInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ArgsType()
export class GetUserArgs {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  username?: string;
}
