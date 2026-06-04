import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ocorrencia } from './entities/ocorrencia.entity'
import { OcorrenciaService } from './ocorrencia.service';
import { OcorrenciaController } from './ocorrencia.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ocorrencia])],
  providers: [OcorrenciaService],
  controllers: [OcorrenciaController],
})
export class OcorrenciaModule {}