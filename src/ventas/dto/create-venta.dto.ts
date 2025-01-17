import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateVentaDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo cantidad no debe ser vacío' })
  @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
  readonly cantidad: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo precio unitario no debe ser vacío' })
  @IsNumber(
    {},
    { message: 'El campo precio unitario debe ser de tipo numérico' },
  )
  readonly precioUnitario: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo total venta no debe ser vacío' })
  @IsNumber(
    {},
    { message: 'El campo total venta debe ser de tipo numérico' },
  )
  readonly totalVenta: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCliente debe estar definido' })
  @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
  readonly idCliente: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
  readonly idProducto: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idEmpleado debe estar definido' })
  @IsNumber({}, { message: 'El campo idEmpleado debe ser de tipo numérico' })
  readonly idEmpleado: number;
}
