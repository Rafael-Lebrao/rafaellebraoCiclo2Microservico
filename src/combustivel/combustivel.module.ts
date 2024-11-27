import { Module } from '@nestjs/common';
import { CombustivelService } from './combustivel.service';
import { CombustivelController } from './combustivel.controller';

@Module({
  providers: [CombustivelService],
  controllers: [CombustivelController]
})
export class CombustivelModule {}
