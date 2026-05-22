import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ocorrencia {

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  titulo!: string;

  @Column()
  descricao!: string;

  @Column()
  status!: string;

  @Column()
  moradorId!: string;

  @Column()
  unidadeId!: string;
}
