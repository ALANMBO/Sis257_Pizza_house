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
    console.log("createPedidoDto", createPedidoDto)
    const existe = await this.pedidosRepository.findOneBy({
      idCliente: createPedidoDto.idCliente,
    });

    if (existe) {
      throw new ConflictException('Ya existe un pedido con este el mismo idCliente ');
    }

    const pedido = new Pedido();
    pedido.idCliente = createPedidoDto.idCliente;
    pedido.idEmpleado = createPedidoDto.idEmpleado;
    pedido.fecha = new Date(createPedidoDto.fecha);
    console.log("fecha",pedido.fecha)
    pedido.estado = createPedidoDto.estado.trim();
    pedido.total = createPedidoDto.total;
    pedido.idPromocion = createPedidoDto.idPromocion; 
    pedido.direccionEntrega = createPedidoDto.direccionEntrega.trim();

    return this.pedidosRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidosRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidosRepository.findOne({
      where: { id },
      relations: ['cliente', 'empleado', 'promocion'],
    });
    
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
    return this.pedidosRepository.softRemove(pedido);
  }
}
