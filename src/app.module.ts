import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Grupo } from './Grupo-pi/entities/entity.grupopi';
import { GrupoModule } from './Grupo-pi/grupopi.module';
import { Projeto } from './Projeto/entities/projeto.entity';
import { ProjetoModule } from './Projeto/projeto.module';
import { Turma } from './turma/entities/turma.entity';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'db_projetogen',
    //   entities: [Grupo, Projeto, Turma],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    GrupoModule,
    ProjetoModule,
    TurmaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
