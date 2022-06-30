import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ThreadModel } from './thread.model';

@ObjectType()
export class CategoryModel {
  @Field(() => ID)
  id: number;
  name: string;
  threads: ThreadModel[];
  createdAt: Date;
  updatedAt: Date;
}
