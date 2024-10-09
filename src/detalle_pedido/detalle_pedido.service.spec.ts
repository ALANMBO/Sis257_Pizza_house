import { Test, TestingModule } from '@nestjs/testing';
import { DetallePedidoService } from './detalle_pedido.service';

describe('DetallePedidoService', () => {
  let service: DetallePedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetallePedidoService],
    }).compile();

    service = module.get<DetallePedidoService>(DetallePedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
