import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta) private ventasRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto): Promise<Venta> {
    const venta = this.ventasRepository.create({
      cantidad: createVentaDto.cantidad,
      precioUnitario: createVentaDto.precioUnitario,
      totalVenta: createVentaDto.totalVenta,
      cliente: { id: createVentaDto.idCliente },
      producto: { id: createVentaDto.idProducto },
      empleado: { id: createVentaDto.idEmpleado },
    });

    return this.ventasRepository.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return this.ventasRepository.find({
      relations: ['cliente', 'producto', 'empleado'],
    });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventasRepository.findOne({
      where: { id },
      relations: ['cliente', 'producto', 'empleado'],
    });
    if (!venta) {
      throw new NotFoundException(`No existe la venta con id ${id}`);
    }
    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto): Promise<Venta> {
    const venta = await this.ventasRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`No existe la venta con id ${id}`);
    }
    const ventaUpdate = Object.assign(venta, updateVentaDto);
    ventaUpdate.cliente = { id: updateVentaDto.idCliente } as Cliente;
    ventaUpdate.producto = { id: updateVentaDto.idProducto } as Producto;
    ventaUpdate.empleado = { id: updateVentaDto.idEmpleado } as Empleado;

    return this.ventasRepository.save(ventaUpdate);
  }

  async remove(id: number) {
    const venta = await this.ventasRepository.findOneBy({ id });
    if (!venta) {
      throw new NotFoundException(`No existe la venta con id ${id}`);
    }
    return this.ventasRepository.delete(id);
  }
}
