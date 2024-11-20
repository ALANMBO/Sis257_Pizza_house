import { PartialType } from '@nestjs/swagger';
import { CreateProductosIngredienteDto } from './create-productos_ingrediente.dto';

export class UpdateProductosIngredienteDto extends PartialType(CreateProductosIngredienteDto) {}
