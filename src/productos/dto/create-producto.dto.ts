import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser menor a 50 caracteres'})
  @MinLength(2, { message: 'El campo nombre no debe ser mayor a 2 caracteres' })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'el campo descripcion no debe ser vacio' })
  @IsString({ message: 'El campo descricion debe ser de tipo cadena' })
  @MaxLength(200, { message: 'el campo descripcion debe ser menor a 200 caracteres' })
  @MinLength(2, {message: 'El campo descripcion debe ser mayor a 10 caracteres'  })
  readonly descripcion: string;

  @ApiProperty()
  @IsNumber( {},{ message: 'El campo precio unitario debe ser de tipo numérico' } )
  readonly precioUnitario: number;

  @ApiProperty()
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  readonly stock: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idCategoria debe estar definido' })
  @IsNumber({}, { message: 'El campo idCategoria debe ser de tipo numérico' })
  readonly idCategoria: number;
}

