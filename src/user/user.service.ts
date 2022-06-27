import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/models/user.model';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @Mutation(() => User)
  async createUser(
    @Args('username') username: string,
    @Args('displayName') mail: string,
    @Args('password') password: string,
  ) {
    return this.prisma.user.create({ data: { username, mail, password } });
  }
}
