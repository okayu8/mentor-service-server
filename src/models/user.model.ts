import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProfileModel } from './profile.model';
import { ThreadModel } from './thread.model';
import { FollowsModel } from './follows.mode';
import { CommentModel } from './comment.model';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;
  username: string;
  email: string;
  password: string;
  profile?: ProfileModel;
  threads: ThreadModel[];
  comments: CommentModel[];
  followers: FollowsModel[];
  following: FollowsModel[];
  createdAt: Date;
  updatedAt: Date;
}
