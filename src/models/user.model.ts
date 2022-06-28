import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;
  username: string;
  mail: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
