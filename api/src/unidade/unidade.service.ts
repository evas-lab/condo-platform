import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidade } from './unidade.entity';

@Injectable()
export class UnidadeService {

  constructor(
    @InjectRepository(Unidade)
    private unidadeRepository: Repository<Unidade>,
  ) {}

  // Listar todos
  findAll() {
    return this.unidadeRepository.find();
  }

  // Buscar por id
  findOne(id: string) {
    return this.unidadeRepository.findOneBy({ id });
  }

  // Criar
  create(dados: any) {
    const unidade = this.unidadeRepository.create(dados);
    return this.unidadeRepository.save(unidade);
  }

  // Atualizar
  update(id: string, dados: any) {
    return this.unidadeRepository.update(id, dados);
  }

  // Remover
  remove(id: string) {
    return this.unidadeRepository.delete(id);
  }
}