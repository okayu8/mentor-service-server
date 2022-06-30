import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Category, Comment } from '@prisma/client';
import { UserModel } from './user.model';

@ObjectType()
export class ThreadModel {
  @Field(() => ID)
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: UserModel;
  authorId: number;
  categorie: Category;
  categoryId: number;
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}
