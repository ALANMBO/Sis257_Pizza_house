import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasProductosController } from './categorias_productos.controller';
import { CategoriasProductosService } from './categorias_productos.service';

describe('CategoriasProductosController', () => {
  let controller: CategoriasProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriasProductosController],
      providers: [CategoriasProductosService],
    }).compile();

    controller = module.get<CategoriasProductosController>(
      CategoriasProductosController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
