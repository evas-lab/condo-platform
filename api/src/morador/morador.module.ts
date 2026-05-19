// Importa o decorator Module do NestJS
import { Module } from '@nestjs/common';

// Importa o TypeOrmModule para registrar a entidade neste módulo
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa os arquivos que criamos
import { Morador } from './morador.entity';
import { MoradorService } from './morador.service';
import { MoradorController } from './morador.controller';

// @Module conecta tudo: entidade, service e controller
@Module({
  imports: [
    // TypeOrmModule.forFeature([Morador]) registra a entidade Morador neste módulo
    // Isso é o que permite usar o @InjectRepository(Morador) no service
    TypeOrmModule.forFeature([Morador]),
  ],

  // Registra o controller — ele vai receber as requisições HTTP
  controllers: [MoradorController],

  // Registra o service — ele contém a lógica e acessa o banco
  providers: [MoradorService],
})
export class MoradorModule {}
