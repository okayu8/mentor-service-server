import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { ThreadModel } from './thread.model';

@ObjectType()
export class CommentModel {
  @Field(() => ID)
  id: number;
  thread: ThreadModel;
  threadId: number;
  author: UserModel;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}
