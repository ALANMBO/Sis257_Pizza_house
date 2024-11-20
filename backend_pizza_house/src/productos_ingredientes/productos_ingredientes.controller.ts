import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosIngredientesService } from './productos_ingredientes.service';
import { CreateProductosIngredienteDto } from './dto/create-productos_ingrediente.dto';
import { UpdateProductosIngredienteDto } from './dto/update-productos_ingrediente.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('productos-ingredientes')
@Controller('productos-ingredientes')
export class ProductosIngredientesController {
  constructor(private readonly productosIngredientesService: ProductosIngredientesService) {}

  @Post()
  create(@Body() createProductosIngredienteDto: CreateProductosIngredienteDto) {
    return this.productosIngredientesService.create(createProductosIngredienteDto);
  }

  @Get()
  findAll() {
    return this.productosIngredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosIngredientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductosIngredienteDto: UpdateProductosIngredienteDto) {
    return this.productosIngredientesService.update(+id, updateProductosIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosIngredientesService.remove(+id);
  }
}
