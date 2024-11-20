import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetodosPagoDto } from './dto/create-metodos_pago.dto';
import { UpdateMetodosPagoDto } from './dto/update-metodos_pago.dto';
import { MetodosPago } from './entities/metodos_pago.entity';

@Injectable()
export class MetodosPagosService {
  constructor(
    @InjectRepository(MetodosPago)
    private metodosPagosRepository: Repository<MetodosPago>,
  ) {}

  async create(createMetodosPagoDto: CreateMetodosPagoDto): Promise<MetodosPago> {
    const existe = await this.metodosPagosRepository.findOneBy({
      idPedido: createMetodosPagoDto.idPedido,
    });

    if (existe) {
      throw new ConflictException('Ya existe un método de pago para este pedido.');
    }

    const metodoPago = new MetodosPago();
    metodoPago.idPedido = createMetodosPagoDto.idPedido;
    metodoPago.tipo = createMetodosPagoDto.tipo;
    metodoPago.estado = createMetodosPagoDto.estado.trim();
    metodoPago.monto = createMetodosPagoDto.monto.trim();

    return this.metodosPagosRepository.save(metodoPago);
  }

  async findAll(): Promise<MetodosPago[]> {
    return this.metodosPagosRepository.find();
  }

  async findOne(id: number): Promise<MetodosPago> {
    const metodoPago = await this.metodosPagosRepository.findOne({
      where: { id },
      relations: ['pedido'], 
    });

    if (!metodoPago) {
      throw new NotFoundException('El método de pago no existe');
    }

    return metodoPago;
  }

  async update(
    id: number,
    updateMetodosPagoDto: UpdateMetodosPagoDto,
  ): Promise<MetodosPago> {
    const metodoPago = await this.findOne(id);

    const metodoPagoUpdate = Object.assign(metodoPago, updateMetodosPagoDto);
    return this.metodosPagosRepository.save(metodoPagoUpdate);
  }

  async remove(id: number){
    const metodoPago = await this.findOne(id);
    await this.metodosPagosRepository.softRemove(metodoPago);
  }
}
