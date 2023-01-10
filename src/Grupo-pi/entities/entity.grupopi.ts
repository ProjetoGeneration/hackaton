import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Projeto } from "src/Projeto/entities/projeto.entity";
import { Turma } from "src/turma/entities/turma.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_grupopi"})
export class Grupo {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number

    
    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    numeroGrupo: number

    @IsNotEmpty()
    @Column({nullable: false})
    @ApiProperty()
    maisInfo: string

    @ApiProperty()
    @ManyToOne(() => Turma, (turma) => turma.grupo, {
        onDelete: "CASCADE"
    })
    turma: Turma

    @ApiProperty()
    @OneToMany(() => Projeto, (projeto) => projeto.grupo)
    projeto: Projeto[]

    


}