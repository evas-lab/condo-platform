import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OcorrenciaService {
  constructor(
    @InjectRepository(Ocorrencia)
    private ocorrenciaRepository: Repository<Ocorrencia>,
  ) {}

  // Criar
  create(ocorrencia: Partial<Ocorrencia>) {
    return this.ocorrenciaRepository.save(ocorrencia);
  }

  // Listar todas
  findAll() {
    return this.ocorrenciaRepository.find();
  }

  // Buscar por ID
  findOne(id: string) {
    return this.ocorrenciaRepository.findOneBy({ id });
  }

  // Atualizar
  update(id: string, dados: Partial<Ocorrencia>) {
    return this.ocorrenciaRepository.update(id, dados);
  }

  // Deletar
  remove(id: string) {
    return this.ocorrenciaRepository.delete(id);
  }
}