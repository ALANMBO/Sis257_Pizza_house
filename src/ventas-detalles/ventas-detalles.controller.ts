import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VentadetallesService } from './ventas-detalles.service';
import { CreateVentadetalleDto } from './dto/create-ventas-detalle.dto';
import { UpdateVentasDetalleDto } from './dto/update-ventas-detalle.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ventas-detalles')
@Controller('ventas-detalles')
export class VentasDetallesController {
  constructor(private readonly ventasDetallesService: VentadetallesService) {}

  @Post()
  create(@Body() createVentasDetalleDto: CreateVentadetalleDto) {
    return this.ventasDetallesService.create(createVentasDetalleDto);
  }

  @Get()
  findAll() {
    return this.ventasDetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ventasDetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVentasDetalleDto: UpdateVentasDetalleDto) {
    return this.ventasDetallesService.update(+id, updateVentasDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ventasDetallesService.remove(+id);
  }
}
