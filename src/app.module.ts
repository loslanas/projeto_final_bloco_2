import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_farmacia', // Cadastrar o nome do BD
    autoLoadEntities: true, // Cadastrar as Classes Entities, para que o 
    // TypeORM possa gerar as tabelas correspondentes no BD
    synchronize: true,
    logging: true
  }),
  CategoriaModule, ProdutoModule,
  // Inserir nome da classe module de cada entidade (ex.: PostagemModule)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
