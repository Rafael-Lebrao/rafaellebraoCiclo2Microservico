import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @MessagePattern({ cmd: 'get_combustivel' })
  getConsulta(data: { id: string }): any {

    return this.appService.postConsulta(data);
  }
}
