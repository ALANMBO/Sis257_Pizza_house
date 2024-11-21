import { Test, TestingModule } from '@nestjs/testing';
import { VentasDetallesService } from './ventas-detalles.service';

describe('VentasDetallesService', () => {
  let service: VentasDetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VentasDetallesService],
    }).compile();

    service = module.get<VentasDetallesService>(VentasDetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
