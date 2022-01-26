import { Test, TestingModule } from '@nestjs/testing';
import { CompanhiaController } from '../companhia.controller';

describe('CompanhiaController', () => {
  let controller: CompanhiaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanhiaController],
    }).compile();

    controller = module.get<CompanhiaController>(CompanhiaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
