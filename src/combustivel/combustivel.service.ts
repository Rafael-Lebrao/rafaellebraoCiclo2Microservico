import { Injectable } from '@nestjs/common';
import { bd_combustivel } from 'src/interface/combustivel-interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CombustivelService {

    constructor(private prismaService: PrismaService){}

    async criarCombustivel(data:bd_combustivel):Promise<bd_combustivel>{
        return this.prismaService.bd_combustivel.create({data});
    }

}
