import { Test, TestingModule } from '@nestjs/testing';
import { PromocionesService } from './promociones.service';

describe('PromocionesService', () => {
  let service: PromocionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromocionesService],
    }).compile();

    service = module.get<PromocionesService>(PromocionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
