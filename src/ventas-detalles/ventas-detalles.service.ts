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

  constructor(@InjectRepository(Ventadetalle) private ventadetallesRepository: Repository<Ventadetalle>) { }


  async create(createVentadetalleDto: CreateVentadetalleDto):Promise<Ventadetalle> {
    const ventadetalle=this.ventadetallesRepository.create({
      cantidad:createVentadetalleDto.cantidad.trim(),
      subtotal:createVentadetalleDto.subtotal.trim(),
      venta:{id:createVentadetalleDto.idVenta},
      producto:{id:createVentadetalleDto.idProducto}
     
    });
    return this.ventadetallesRepository.save(ventadetalle)
  }

  async findAll():Promise<Ventadetalle[]> {
    return this.ventadetallesRepository.find({relations:['venta','producto']});
  }

 async  findOne(id: number) :Promise<Ventadetalle>{
  const ventadetalle=await this.ventadetallesRepository.findOne({
    where:{id},
    relations:['venta','producto'],
  });
  if(!ventadetalle){
    throw new NotFoundException(`El venta detalle con el id ${id} no existe`)
  }
    return ventadetalle;
  }

  async update(id: number, updateVentadetalleDto: UpdateVentasDetalleDto) :Promise<Ventadetalle>{
    const ventadetalle=await this.findOne(id);
    if (!ventadetalle) {
      throw new NotFoundException(`La venta de  detalle con el id ${id} no existe`);
    }
    const actuvd=Object.assign(ventadetalle,updateVentadetalleDto);
    actuvd.venta={id:updateVentadetalleDto.idVenta} as Venta;
    actuvd.producto={id:updateVentadetalleDto.idProducto}as Producto;
    return this.ventadetallesRepository.save(actuvd);
  }

  async remove(id: number) {
    const ventadetalle=await this.findOne(id);
    if (!ventadetalle) {
      throw new NotFoundException(`La venta de  detalle con el id ${id} no existe`);
    }
    return this.ventadetallesRepository.delete(ventadetalle.id);
  }
}
