import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDetallePedidoDto } from './dto/create-detalle_pedido.dto';
import { UpdateDetallePedidoDto } from './dto/update-detalle_pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallePedido } from './entities/detalle_pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetallePedidoService {
  constructor(
    @InjectRepository(DetallePedido)
    private detallePedidoRepository: Repository<DetallePedido>,
  ) {}

  async create(createDetallePedidoDto: CreateDetallePedidoDto): Promise<DetallePedido> {
    const existe = await this.detallePedidoRepository.findOne({
      where: {
        idPedido: createDetallePedidoDto.idPedido,
        idProducto: createDetallePedidoDto.idProducto,
      },
    });

    if (existe) throw new ConflictException('El detalle de pedido ya existe');

    const detallePedido = new DetallePedido();
    detallePedido.idPedido = createDetallePedidoDto.idPedido;
    detallePedido.idProducto = createDetallePedidoDto.idProducto;
    detallePedido.cantidad = createDetallePedidoDto.cantidad;
    detallePedido.precioUnitario = createDetallePedidoDto.precioUnitario;
    detallePedido.descuento = createDetallePedidoDto.descuento ?? null;

    return this.detallePedidoRepository.save(detallePedido);
  }

  async findAll(): Promise<DetallePedido[]> {
    return this.detallePedidoRepository.find({ relations: ['pedido', 'producto'] });
  }

  async findOne(id: number): Promise<DetallePedido> {
    const detallePedido = await this.detallePedidoRepository.findOne({
      where: { id },
      relations: ['pedido', 'producto'],
    });
    if (!detallePedido) throw new NotFoundException('El detalle de pedido no existe');
    return detallePedido;
  }

  async update(
    id: number,
    updateDetallePedidoDto: UpdateDetallePedidoDto,
  ): Promise<DetallePedido> {
    const detallePedido = await this.detallePedidoRepository.findOneBy({ id });
    if (!detallePedido) throw new NotFoundException('El detalle de pedido no existe');

    const detallePedidoUpdate = Object.assign(detallePedido, updateDetallePedidoDto);
    return this.detallePedidoRepository.save(detallePedidoUpdate);
  }

  async remove(id: number) {
    const detallePedido = await this.detallePedidoRepository.findOneBy({ id });
    if (!detallePedido) throw new NotFoundException('El detalle de pedido no existe');
    return this.detallePedidoRepository.softRemove(detallePedido);
  }
}

