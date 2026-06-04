import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('moradores')
export class Morador {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  unidadeId: string;
}