import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductosDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductosDto): Promise<Producto> {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(Number(id)); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): Promise<Producto> {
    return this.productosService.update(Number(id), updateProductoDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productosService.remove(Number(id)); 
  }
}
