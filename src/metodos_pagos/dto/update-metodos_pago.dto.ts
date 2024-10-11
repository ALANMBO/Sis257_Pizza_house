import { PartialType } from '@nestjs/swagger';
import { CreateMetodosPagoDto } from './create-metodos_pago.dto';

export class UpdateMetodosPagoDto extends PartialType(CreateMetodosPagoDto) {}
