import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriasProductosService } from './categorias_productos.service';
import { CreateCategoriasProductoDto } from './dto/create-categorias_producto.dto';
import { UpdateCategoriasProductoDto } from './dto/update-categorias_producto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categorias_productos')
@Controller('categorias-productos')
export class CategoriasProductosController {
  constructor(
    private readonly categoriasProductosService: CategoriasProductosService,
  ) {}

  @Post()
  create(@Body() createCategoriasProductoDto: CreateCategoriasProductoDto) {
    return this.categoriasProductosService.create(createCategoriasProductoDto);
  }

  @Get()
  findAll() {
    return this.categoriasProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasProductosService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriasProductoDto: UpdateCategoriasProductoDto,
  ) {
    return this.categoriasProductosService.update(
      +id,
      updateCategoriasProductoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasProductosService.remove(+id);
  }
}
