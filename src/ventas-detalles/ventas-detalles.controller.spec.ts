import { Test, TestingModule } from '@nestjs/testing';
import { VentasDetallesController } from './ventas-detalles.controller';
import { VentasDetallesService } from './ventas-detalles.service';

describe('VentasDetallesController', () => {
  let controller: VentasDetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentasDetallesController],
      providers: [VentasDetallesService],
    }).compile();

    controller = module.get<VentasDetallesController>(VentasDetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
