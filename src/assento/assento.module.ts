import { Module } from '@nestjs/common';
import { AssentoService } from './assento.service';
import { AssentoController } from './assento.controller';

@Module({
  providers: [AssentoService],
  controllers: [AssentoController],
})
export class AssentoModule {}
