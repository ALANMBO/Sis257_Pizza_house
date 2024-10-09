import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateDetallePedidoDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo idPedido debe estar definido' })
  @IsNumber({}, { message: 'El campo idPedido debe ser tipo numérico' })
  readonly idPedido: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser tipo numérico' })
  readonly idProducto: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo cantidad debe estar definido' })
  @IsNumber({}, { message: 'El campo cantidad debe ser tipo numérico' })
  @IsPositive({ message: 'El campo cantidad debe ser un número positivo' })
  readonly cantidad: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo precioUnitario debe estar definido' })
  @IsNumber({}, { message: 'El campo precioUnitario debe ser tipo numérico' })
  @IsPositive({ message: 'El campo precioUnitario debe ser un número positivo' })
  readonly precioUnitario: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber({}, { message: 'El campo descuento debe ser tipo numérico' })
  @IsPositive({ message: 'El campo descuento debe ser un número positivo' })
  readonly descuento?: number; 
}

