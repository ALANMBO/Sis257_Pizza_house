import { Test, TestingModule } from '@nestjs/testing';
import { MetodosPagosService } from './metodos_pagos.service';

describe('MetodosPagosService', () => {
  let service: MetodosPagosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodosPagosService],
    }).compile();

    service = module.get<MetodosPagosService>(MetodosPagosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
