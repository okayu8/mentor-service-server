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
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.prisma.user.create({ data: { username, email, password } });
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
