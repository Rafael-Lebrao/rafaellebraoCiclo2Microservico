import { Controller, Logger } from '@nestjs/common';
import { CombustivelService } from './combustivel.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { bd_combustivel } from 'src/interface/combustivel-interface';

@Controller('combustivel')
export class CombustivelController {

    constructor(private readonly combustivelService: CombustivelService) { }

    logger = new Logger(CombustivelController.name)

    @EventPattern('cadastro-combustivel')
    async cadastroUsuario(@Payload() combustivel: bd_combustivel) {
        this.combustivelService.criarCombustivel(combustivel)
    }

}
