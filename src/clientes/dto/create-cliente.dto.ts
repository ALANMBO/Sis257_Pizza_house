import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo razon_social es obligatorio' })
  @IsString({ message: 'El campo razon_social debe ser de tipo cadena' })
  @MaxLength(15, {
    message: 'El campo razon_social no debe ser mayor a 15 caracteres',
  })
  readonly razon_social: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nit es obligatorio' })
  @IsNumber({}, { message: 'El campo nit debe ser numérico' })
  @Min(1000000000, { message: 'El campo nit debe tener al menos 10 dígitos' })
  @Max(999999999999999, {
    message: 'El campo nit no debe ser mayor a 15 dígitos',
  })
  readonly nit: number;
}
