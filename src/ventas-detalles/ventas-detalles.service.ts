import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentadetalleDto } from './dto/create-ventas-detalle.dto';
import { UpdateVentasDetalleDto } from './dto/update-ventas-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ventadetalle } from './entities/ventas-detalle.entity';
import { Repository } from 'typeorm';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class VentadetallesService {
  constructor(
    @InjectRepository(Ventadetalle)
    private ventadetalleRepository: Repository<Ventadetalle>,
  ) {}

  async create(createVentadetalleDto: CreateVentadetalleDto): Promise<Ventadetalle> {
    const ventadetalle = this.ventadetalleRepository.create({
      cantidad: createVentadetalleDto.cantidad,
      subtotal: createVentadetalleDto.subtotal,
      venta: { id: createVentadetalleDto.idVenta },
      producto: { id: createVentadetalleDto.idProducto },
    });

    return this.ventadetalleRepository.save(ventadetalle);
  }

  async findAll(): Promise<Ventadetalle[]> {
    return this.ventadetalleRepository.find({
      relations: ['venta', 'producto'],
    });
  }

  async findOne(id: number): Promise<Ventadetalle> {
    const ventadetalle = await this.ventadetalleRepository.findOne({
      where: { id },
      relations: ['venta', 'producto'],
    });
    if (!ventadetalle) {
      throw new NotFoundException(`No existe el detalle de venta con id ${id}`);
    }
    return ventadetalle;
  }

  async update(id: number, updateVentadetalleDto: UpdateVentasDetalleDto): Promise<Ventadetalle> {
    const ventadetalle = await this.ventadetalleRepository.findOneBy({ id });
    if (!ventadetalle) {
      throw new NotFoundException(`No existe el detalle de venta con id ${id}`);
    }

    const ventadetalleUpdate = Object.assign(ventadetalle, updateVentadetalleDto);
    ventadetalleUpdate.venta = { id: updateVentadetalleDto.idVenta } as Venta;
    ventadetalleUpdate.producto = { id: updateVentadetalleDto.idProducto } as Producto;

    return this.ventadetalleRepository.save(ventadetalleUpdate);
  }

  async remove(id: number) {
    const ventadetalle = await this.ventadetalleRepository.findOneBy({ id });
    if (!ventadetalle) {
      throw new NotFoundException(`No existe el detalle de venta con id ${id}`);
    }
    return this.ventadetalleRepository.delete(id);
  }
}
