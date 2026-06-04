typescriptimport { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Morador } from './morador.entity';

@Injectable()
export class MoradorService {

  constructor(
    @InjectRepository(Morador)
    private readonly moradorRepository: Repository<Morador>,
  ) {}

  async findAll(): Promise<Morador[]> {
    return this.moradorRepository.find();
  }

  async findOne(id: string): Promise<Morador | null> {
    return this.moradorRepository.findOneBy({ id });
  }

  async create(dados: Partial<Morador>): Promise<Morador> {
    const novoMorador = this.moradorRepository.create(dados);
    return this.moradorRepository.save(novoMorador);
  }

  async update(id: string, dados: Partial<Morador>): Promise<Morador | null> {
    await this.moradorRepository.update(id, dados);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.moradorRepository.delete(id);
  }
}