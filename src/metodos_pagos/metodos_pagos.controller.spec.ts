import { Test, TestingModule } from '@nestjs/testing';
import { MetodosPagosController } from './metodos_pagos.controller';
import { MetodosPagosService } from './metodos_pagos.service';

describe('MetodosPagosController', () => {
  let controller: MetodosPagosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodosPagosController],
      providers: [MetodosPagosService],
    }).compile();

    controller = module.get<MetodosPagosController>(MetodosPagosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
