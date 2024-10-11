import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  IsDefined,
  IsISO8601,
} from 'class-validator';

export class CreatePedidoDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo idCliente debe estar definido' })
  @IsNumber({}, { message: 'El campo idCliente debe ser numérico' })
  readonly idCliente: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idEmpleado debe estar definido' })
  @IsNumber({}, { message: 'El campo idEmpleado debe ser numérico' })
  readonly idEmpleado: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El campo idPromocion debe ser numérico' })
  readonly idPromocion?: number; 

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha es obligatorio' })
  @IsISO8601({strict : false})
  readonly fecha: string ; 

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo estado es obligatorio' })
  @IsString({ message: 'El campo estado debe ser una cadena de texto' })
  readonly estado: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo total es obligatorio' })
  @IsNumber({}, { message: 'El campo total debe ser numérico' })
  readonly total: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo dirección de entrega es obligatorio' })
  @IsString({ message: 'El campo dirección de entrega debe ser una cadena de texto' })
  readonly direccionEntrega: string;
}