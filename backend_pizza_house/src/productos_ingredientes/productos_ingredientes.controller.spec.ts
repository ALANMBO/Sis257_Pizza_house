import { Test, TestingModule } from '@nestjs/testing';
import { ProductosIngredientesController } from './productos_ingredientes.controller';
import { ProductosIngredientesService } from './productos_ingredientes.service';

describe('ProductosIngredientesController', () => {
  let controller: ProductosIngredientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosIngredientesController],
      providers: [ProductosIngredientesService],
    }).compile();

    controller = module.get<ProductosIngredientesController>(ProductosIngredientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
