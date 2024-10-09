import { PartialType } from '@nestjs/swagger';
import { CreateProductosDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductosDto) {
  nombre: any;
}
