import { Module } from '@nestjs/common';
import { CattleService } from './cattle.service';
import { CattleController } from './cattle.controller';

@Module({
  providers: [CattleService],
  controllers: [CattleController]
})
export class CattleModule {}
