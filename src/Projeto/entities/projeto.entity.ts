import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Grupo } from "src/Grupo-pi/entities/entity.grupopi";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_projeto"})
export class Projeto{
    @PrimaryGeneratedColumn() 
    @ApiProperty()   
    id: number

    
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nomeProjeto: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    logoProjeto: string

    
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    linkProjeto: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    pitProjeto: string

    @ApiProperty({ type: () => Grupo })
    @ManyToOne(() => Grupo, (grupo) => grupo.projeto, {
        onDelete: "CASCADE"
    })
    grupo: Grupo


}