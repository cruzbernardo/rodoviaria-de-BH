import { Module } from '@nestjs/common';
import { AssentoModule } from './assento/assento.module';
import { CompanhiaModule } from './companhia/companhia.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ViagemModule } from './viagem/viagem.module';

@Module({
  imports: [AssentoModule, CompanhiaModule, UsuarioModule, ViagemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
