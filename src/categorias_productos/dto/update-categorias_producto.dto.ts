import { PartialType } from '@nestjs/swagger';
import { CreateCategoriasProductoDto } from './create-categorias_producto.dto';

export class UpdateCategoriasProductoDto extends PartialType(CreateCategoriasProductoDto) {}
