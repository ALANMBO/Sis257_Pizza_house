import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    // Verificar si ya existe un pedido con el mismo id_cliente y fecha
    const existe = await this.pedidosRepository.findOneBy({
      id_cliente: createPedidoDto.id_cliente,
      fecha: createPedidoDto.fecha,
    });
    if (existe) {
      throw new ConflictException('Ya existe un pedido con este cliente en la misma fecha');
    }

    const pedido = new Pedido();
    pedido.id_cliente = createPedidoDto.id_cliente;
    pedido.id_empleado = createPedidoDto.id_empleado;
    pedido.fecha = createPedidoDto.fecha;
    pedido.estado = createPedidoDto.estado.trim();
    pedido.total = createPedidoDto.total;
    pedido.id_promocion = createPedidoDto.id_promocion; // Opcional
    pedido.direccion_entrega = createPedidoDto.direccion_entrega.trim();

    return this.pedidosRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidosRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidosRepository.findOneBy({ id });
    if (!pedido) {
      throw new NotFoundException('El pedido no existe');
    }
    return pedido;
  }

  async update(
    id: number,
    updatePedidoDto: UpdatePedidoDto,
  ): Promise<Pedido> {
    const pedido = await this.findOne(id);

    const pedidoUpdate = Object.assign(pedido, updatePedidoDto);
    return this.pedidosRepository.save(pedidoUpdate);
  }

  async remove(id: number) {
    const pedido = await this.findOne(id);
    await this.pedidosRepository.softRemove(pedido);
  }
}


