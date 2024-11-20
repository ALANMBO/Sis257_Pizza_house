import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasProductosService } from './categorias_productos.service';

describe('CategoriasProductosService', () => {
  let service: CategoriasProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasProductosService],
    }).compile();

    service = module.get<CategoriasProductosService>(
      CategoriasProductosService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
