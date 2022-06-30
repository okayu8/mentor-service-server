import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
export class ProfileModel {
  @Field(() => ID)
  id: number;
  intro: string;
  user: UserModel;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
