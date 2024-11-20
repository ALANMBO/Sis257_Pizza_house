import { Test, TestingModule } from '@nestjs/testing';
import { ProductosIngredientesService } from './productos_ingredientes.service';

describe('ProductosIngredientesService', () => {
  let service: ProductosIngredientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductosIngredientesService],
    }).compile();

    service = module.get<ProductosIngredientesService>(ProductosIngredientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
