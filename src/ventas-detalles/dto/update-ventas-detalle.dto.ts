import { PartialType } from '@nestjs/swagger';
import { CreateVentadetalleDto } from './create-ventas-detalle.dto';

export class UpdateVentasDetalleDto extends PartialType(CreateVentadetalleDto) {}
