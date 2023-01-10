import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Grupo } from "src/Grupo-pi/entities/entity.grupopi";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity ({name: "tb_turma"})
export class Turma{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length:500, nullable: false})
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({nullable: false})
    isAtivo: boolean

    @ApiProperty()
    @OneToMany(() => Grupo, (grupo) => grupo.turma)
    grupo: Grupo[]


    
}