import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
export class FollowsModel {
  @Field(() => ID)
  follower: UserModel;
  followerId: number;
  following: UserModel;
  followingId: number;
  createdAt: Date;
  updatedAt: Date;
}
