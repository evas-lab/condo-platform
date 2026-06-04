import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MoradorService } from './morador.service';
import { Morador } from './morador.entity';

@Controller('moradores')
export class MoradorController {
  constructor(private readonly moradorService: MoradorService) {}

  @Get()
  findAll() {
    return this.moradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moradorService.findOne(id);
  }

  @Post()
  create(@Body() dados: Partial<Morador>) {
    return this.moradorService.create(dados);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dados: Partial<Morador>) {
    return this.moradorService.update(id, dados);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moradorService.remove(id);
  }
}
