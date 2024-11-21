import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombres no debe ser vacío' })
  @IsString({ message: 'El campo nombres debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombres no debe ser mayor a 50 caracteres' })
  @MinLength(3, { message: 'El campo nombres debe ser mayor a 3 caracteres' })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellidos no debe ser vacío' })
  @IsString({ message: 'El campo apellidos debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo apellidos no debe ser mayor a 50 caracteres' })
  @MinLength(4, { message: 'El campo apellidos debe ser mayor a 4 caracteres' })
  readonly apellidos: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo direccion no debe ser vacío' })
  @IsString({ message: 'El campo direccion debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo direccion no debe ser mayor a 50 caracteres' })
  @MinLength(4, { message: 'El campo direccion debe ser mayor a 4 caracteres' })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo celular no debe ser vacío' })
  @IsString({ message: 'El campo celular debe ser de tipo cadena' })
  @MaxLength(15, { message: 'El campo celular no debe ser mayor a 15 caracteres' })
  @MinLength(8, { message: 'El campo celular debe ser mayor a 8 caracteres' })
  readonly celular: string;
}
