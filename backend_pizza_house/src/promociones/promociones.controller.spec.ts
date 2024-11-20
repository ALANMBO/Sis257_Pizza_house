import { Test, TestingModule } from '@nestjs/testing';
import { PromocionesController } from './promociones.controller';
import { PromocionesService } from './promociones.service';

describe('PromocionesController', () => {
  let controller: PromocionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromocionesController],
      providers: [PromocionesService],
    }).compile();

    controller = module.get<PromocionesController>(PromocionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
