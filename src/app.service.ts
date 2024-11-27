import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  prisma: any;
 
  async postConsulta(data: { id: string }): Promise<any> {
    // Aqui você consulta o banco de dados (por exemplo, pelo id do combustível)
    const combustivel = await this.prisma.bd_combustivel.findUnique({
      where: { combustivel_id: Number(data.id) },  // Supondo que o id seja numérico
    });

    if (!combustivel) {
      return { error: 'Combustível não encontrado' }; // Caso não encontre
    }

    return {
      id: combustivel.combustivel_id,
      nome: combustivel.combustivel_nome,
      preco: combustivel.combustvel_preco,
    };
  }

}
