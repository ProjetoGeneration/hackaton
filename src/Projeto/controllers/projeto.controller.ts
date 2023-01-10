import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Projeto } from "../entities/projeto.entity";
import { ProjetoService } from "../services/projeto.service";

@ApiTags('Projetos')
@Controller("/projetos")
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Projeto[]> {
    return this.projetoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Projeto> {
    return this.projetoService.findById(id);
  }

  @Get('/nomeProjeto/:nomeProjeto')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('nomeProjeto') nomeProjeto: string): Promise<Projeto[]> {
    return this.projetoService.findByNome(nomeProjeto);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Projeto: Projeto): Promise<Projeto> {
    return this.projetoService.create(Projeto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Projeto: Projeto): Promise<Projeto> {
    return this.projetoService.update(Projeto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.projetoService.delete(id);
  }

}