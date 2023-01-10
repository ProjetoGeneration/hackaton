import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Grupo } from "../entities/entity.grupopi";

@Injectable()
export class GrupoService{
    constructor(
        @InjectRepository(Grupo)
        private grupoRepository: Repository<Grupo>
    ) {}

    async findAll(): Promise<Grupo[]> {
        return await this.grupoRepository.find({
            relations:{
                projeto: true,
                turma: true
            }
        });
    }

    async findByNumber(numeroGrupo: number): Promise<Grupo> {
        let grupo = await this.grupoRepository.findOne({
            where:{
                numeroGrupo
            },
            relations:{
                projeto: true,
                turma: true
            }
        });
        if (!grupo)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        return grupo;
    }
    
    async findById(id: number): Promise<Grupo> {
        let grupo = await this.grupoRepository.findOne({
            where:{
                id
            },
            relations:{
                projeto: true,
                turma: true
            }
        });
        if (!grupo)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        return grupo;
    }

    async create(grupo: Grupo): Promise<Grupo>{
        return await this.grupoRepository.save(grupo);
    }

    async update(grupo: Grupo): Promise<Grupo> {
        let buscaGrupo: Grupo = await this.findById(grupo.id);

        if (!buscaGrupo || !grupo.id)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        return await this.grupoRepository.save(grupo);
    }

    async delete (id:number): Promise<DeleteResult>{
        let buscaGrupo = await this.findById(id);

        if(!buscaGrupo)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);

        return await this.grupoRepository.delete(id);
    }

}