import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DeleteResult } from "typeorm";
import { Turma } from "../entities/turma.entity";
import { TurmaService } from "../service/turma.service";

@ApiTags('Turmas')
@Controller("/turmas")
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) { }
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Turma[]> {
        return this.turmaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Turma> {
        return this.turmaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string): Promise<Turma[]> {
        return this.turmaService.findByDescricao(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() Turma: Turma): Promise<Turma>{
        return this.turmaService.create(Turma)
    }


    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() Turma: Turma): Promise<Turma>{
        return this.turmaService.update(Turma)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.turmaService.delete(id)
    }

    
  
}