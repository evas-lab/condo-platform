// Importa o decorator Injectable do NestJS
// @Injectable marca a classe como um "provedor" que pode ser injetado em outras classes
import { Injectable } from '@nestjs/common';

// Importa o decorator InjectRepository e o Repository do TypeORM
// Repository é a classe que permite fazer operações no banco de dados (buscar, salvar, etc.)
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importa a entidade Morador que você criou
import { Morador } from './morador.entity';

// @Injectable faz com que o NestJS saiba que essa classe pode ser usada em outros lugares
@Injectable()
export class MoradorService {
  // O constructor é chamado quando o NestJS cria essa classe
  // @InjectRepository(Morador) diz ao NestJS para injetar o repositório da tabela 'moradores'
  // Assim o 'moradorRepository' já vem pronto para usar, sem precisar criar na mão
  constructor(
    @InjectRepository(Morador)
    private moradorRepository: Repository<Morador>,
  ) {}

  // Lista todos os moradores da tabela
  // 'async' e 'await' são usados porque operações no banco de dados levam tempo
  async findAll(): Promise<Morador[]> {
    return await this.moradorRepository.find();
  }

  // Busca um morador pelo ID
  // 'id: string' é o parâmetro que recebemos — o ID do morador que queremos buscar
  async findOne(id: string): Promise<Morador | null> {
    return await this.moradorRepository.findOneBy({ id });
  }

  // Cria um novo morador no banco de dados
  // 'Partial<Morador>' significa que podemos passar só alguns campos da entidade
  async create(dados: Partial<Morador>): Promise<Morador> {
    // 'create' monta o objeto Morador com os dados recebidos
    const novoMorador = this.moradorRepository.create(dados);
    // 'save' salva de fato no banco de dados e retorna o morador com o ID gerado
    return await this.moradorRepository.save(novoMorador);
  }

  // Atualiza um morador existente
  // Recebe o ID de quem atualizar e os novos dados
  async update(id: string, dados: Partial<Morador>): Promise<Morador | null> {
    // 'update' aplica as mudanças diretamente na tabela pelo ID
    await this.moradorRepository.update(id, dados);
    // Depois busca e retorna o morador já atualizado
    return await this.findOne(id);
  }

  // Remove um morador do banco de dados pelo ID
  async remove(id: string): Promise<void> {
    await this.moradorRepository.delete(id);
  }
}
