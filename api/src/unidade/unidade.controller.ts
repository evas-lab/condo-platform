import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UnidadeService } from './unidade.service';

@Controller('unidades')
export class UnidadeController {

  constructor(private unidadeService: UnidadeService) {}

  // GET — listar todos
  @Get()
  listar() {
    return this.unidadeService.findAll();
  }

  // GET /:id — buscar por id
  @Get(':id')
  buscar(@Param('id') id: string) {
    return this.unidadeService.findOne(id);
  }

  // POST — criar
  @Post()
  criar(@Body() dados: any) {
    return this.unidadeService.create(dados);
  }

  // PATCH /:id — atualizar
  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.unidadeService.update(id, dados);
  }

  // DELETE /:id — remover
  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.unidadeService.remove(id);
  }
}