import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombustivelModule } from './combustivel/combustivel.module';

@Module({
  imports: [CombustivelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
