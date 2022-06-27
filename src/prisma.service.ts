/**
 * この設定はオプショナルだが、未設定だと最初のDBアクセスの際にコネクションを張りに行く。
 * 設定しておくと、サーバー起動時にコネクションを張ってくれる。
 */

import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
