import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from 'src/models/user.model';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [UserModel])
  async users() {
    return this.prisma.user.findMany();
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.prisma.user.create({ data: { username, email, password } });
  }

  @Mutation(() => UserModel)
  async deleteUser(@Args('id') id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
