import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Unidade {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar'})
  bloco: string;
}

