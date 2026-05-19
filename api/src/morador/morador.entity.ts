import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity define que esta classe será uma tabela chamada 'moradores' no banco de dados
@Entity('moradores')
export class Morador {
  // O sinal '!' indica que a propriedade será inicializada externamente (pelo TypeORM)
  // Define o ID como uma chave primária gerada automaticamente no formato UUID
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // Nome completo do morador
  @Column()
  nome!: string;

  // Telefone de contato para o condomínio
  @Column()
  telefone!: string;

  // ID da unidade (apartamento/casa) onde o morador reside
  @Column()
  unidadeId!: string;
}
