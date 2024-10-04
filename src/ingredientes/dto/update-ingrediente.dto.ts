import { PartialType } from '@nestjs/swagger';
import { CreateIngredienteDto } from './create-ingrediente.dto';

export class UpdateIngredienteDto extends PartialType(CreateIngredienteDto) {}
