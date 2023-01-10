import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { ApiTags } from "@nestjs/swagger";
import { Grupo } from "../entities/entity.grupopi";
import { GrupoService } from "../services/grupo.service";

@ApiTags('Grupos')
@Controller("/grupos")
export class GrupoController{
    constructor(private readonly grupoService: GrupoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Grupo[]>{
        return this.grupoService.findAll();
    }

    @Get('/:numeroGrupo')
    @HttpCode(HttpStatus.OK)
    findByNumber(@Param('numeroGrupo', ParseIntPipe) numeroGrupo: number): Promise<Grupo>{
        return this.grupoService.findByNumber(numeroGrupo)
    }
    
    @Get('/id/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Grupo>{
        return this.grupoService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() grupo: Grupo): Promise<Grupo>{
        return this.grupoService.create(grupo)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() grupo: Grupo): Promise<Grupo>{
        return this.grupoService.update(grupo);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.grupoService.delete(id)
    }
}