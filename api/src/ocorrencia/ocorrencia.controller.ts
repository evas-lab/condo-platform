import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { Ocorrencia } from './entities/ocorrencia.entity';

@Controller('ocorrencia')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService) {}

  @Post()
  create(@Body() ocorrencia: Ocorrencia) {
    return this.ocorrenciaService.create(ocorrencia);
  }

  @Get()
  findAll() {
    return this.ocorrenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocorrenciaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dados: Ocorrencia) {
    return this.ocorrenciaService.update(id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocorrenciaService.remove(id);
  }
}