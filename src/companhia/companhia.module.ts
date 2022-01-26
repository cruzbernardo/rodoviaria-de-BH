import { Module } from '@nestjs/common';
import { CompanhiaController } from './companhia.controller';
import { CompanhiaService } from './companhia.service';

@Module({
  controllers: [CompanhiaController],
  providers: [CompanhiaService]
})
export class CompanhiaModule {}
