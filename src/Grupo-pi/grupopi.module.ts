import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GrupoController } from "./controllers/grupo.controller";
import { Grupo } from "./entities/entity.grupopi";
import { GrupoService } from "./services/grupo.service";

@Module({
    imports: [TypeOrmModule.forFeature([Grupo])],
    providers: [GrupoService],
    controllers: [GrupoController],
    exports: [TypeOrmModule]
})

export class GrupoModule{}