import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Morador } from './morador.entity';
import { MoradorController } from './morador.controller';
import { MoradorService } from './morador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Morador])],
  controllers: [MoradorController],
  providers: [MoradorService],
})
export class MoradorModule {}