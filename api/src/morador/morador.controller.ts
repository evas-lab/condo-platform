// Importa os decorators necessários do NestJS
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

// Importa o Service
import { MoradorService } from './morador.service';

// Importa a entidade para usar como tipo
import { Morador } from './morador.entity';

// @Controller('moradores') define que este controller responde às requisições
// que chegam na rota /moradores
@Controller('moradores')
export class MoradorController {
  // Injeta o MoradorService — o controller não acessa o banco diretamente,
  // ele sempre passa pelo service
  constructor(private readonly moradorService: MoradorService) {}

  // GET /moradores — retorna todos os moradores
  @Get()
  findAll(): Promise<Morador[]> {
    return this.moradorService.findAll();
  }

  // GET /moradores/:id — retorna um morador pelo ID
  // @Param('id') captura o valor do :id que vem na URL
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Morador | null> {
    return this.moradorService.findOne(id);
  }

  // POST /moradores — cria um novo morador
  // @Body() captura os dados enviados no corpo da requisição (JSON)
  @Post()
  create(@Body() dados: Partial<Morador>): Promise<Morador> {
    return this.moradorService.create(dados);
  }

  // PATCH /moradores/:id — atualiza parcialmente um morador existente
  // Recebe tanto o ID pela URL quanto os novos dados pelo corpo
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dados: Partial<Morador>,
  ): Promise<Morador | null> {
    return this.moradorService.update(id, dados);
  }

  // DELETE /moradores/:id — remove um morador pelo ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.moradorService.remove(id);
  }
}
