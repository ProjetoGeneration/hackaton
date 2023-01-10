import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Projeto } from "../entities/projeto.entity";


@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projeto)
        private projetoRepository: Repository<Projeto>
    ) { }

    async findAll(): Promise<Projeto[]> {
        return await this.projetoRepository.find({
            relations: {
                grupo: true
            }
        });
    }

    async findById(id: number): Promise<Projeto> {

        let projeto = await this.projetoRepository.findOne({
            where: {
                id
            },
            relations: {
                grupo: true
            }
        });

        if (!projeto)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return projeto;
    }

    async findByNome(nomeProjeto: string): Promise<Projeto[]> {
        return await this.projetoRepository.find({
            where: {
                nomeProjeto: ILike(`%${nomeProjeto}%`)
            },
            relations: {
                grupo: true
            }
        })
    }

    async create(Projeto: Projeto): Promise<Projeto> {
        return await this.projetoRepository.save(Projeto);
    }

    async update(projeto: Projeto): Promise<Projeto> {

        let buscaProjeto = await this.findById(projeto.id);

        if (!buscaProjeto || !projeto.id)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.projetoRepository.save(projeto);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaProjeto = await this.findById(id);

        if (!buscaProjeto)
            throw new HttpException('Projeto não encontrado!', HttpStatus.NOT_FOUND);

        return await this.projetoRepository.delete(id);

    }

}