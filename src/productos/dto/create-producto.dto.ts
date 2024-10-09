import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductosDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo precio debe estar definido' })
  @IsNumber({}, { message: 'El campo precio debe ser tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCategoria debe estar definido' })
  @IsNumber({}, { message: 'El campo idCategoria debe ser tipo numérico' })
  readonly idCategoria: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo disponibilidad debe estar definido' })
  @IsNumber({}, { message: 'El campo disponibilidad debe ser tipo numérico' })
  readonly disponibilidad: number;  

  @ApiProperty()
  @IsDefined({ message: 'El campo tamanio debe estar definido' })
  @IsNumber({}, { message: 'El campo tamanio debe ser tipo numérico' })
  readonly tamanio: number;  
}
