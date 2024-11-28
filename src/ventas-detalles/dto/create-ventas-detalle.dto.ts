import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateVentadetalleDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsString({ message: 'El campo cantidad debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo cantidad no debe ser mayor a 50 caracteres' })
  @MinLength(1, { message: 'El campo cantidad no debe ser menor a 1 caracter' })
  readonly cantidad: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo subtotal no debe ser vacío' })
  @IsString({ message: 'El campo subtotal debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo subtotal no debe ser mayor a 50 caracteres' })
  @MinLength(1, { message: 'El campo subtotal no debe ser menor a 1 caracter' })
  readonly subtotal: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo idVenta debe estar definido' })
  @IsNumber({}, { message: 'El campo idVenta debe ser de tipo numérico' })
  readonly idVenta: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
  readonly idProducto: number;
}
