import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssentoModule } from './assento/assento.module';
import { CompanhiaModule } from './companhia/companhia.module';
import { Assento } from './database/entities/AssentoEntity';
import { Companhia } from './database/entities/CompanhiaEntity';
import { Usuario } from './database/entities/UsuarioEntity';
import { Viagem } from './database/entities/ViagemEntity';
import { UsuarioModule } from './usuario/usuario.module';
import { ViagemModule } from './viagem/viagem.module';

@Module({
  imports: [
    AssentoModule,
    CompanhiaModule,
    UsuarioModule,
    ViagemModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Viagem, Usuario, Companhia, Assento],
      synchronize: false,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
