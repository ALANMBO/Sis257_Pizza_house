import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class CreateVentadetalleDto {
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo cantidad no debe ser vacío' })
  @IsString({ message: 'El campo cantidad debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo cantidad no debe ser nemor a 50 caracteres'})
  @MinLength(1, {message: 'El campo cantidad no debe ser mayor a 1 caracteres'})
  readonly cantidad: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo subtotal no debe ser vacío' })
  @IsString({ message: 'El campo subtotal debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo subtotal no debe ser nemor a 50 caracteres'})
  @MinLength(1, {message: 'El campo subtotal no debe ser mayor a 4 caracteres'})
  readonly subtotal: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ApiProperty()
  @IsDefined({ message: 'El campo idVenta debe estar definido' })
  @IsNumber({}, { message: 'El campo idVenta debe ser de tipo numérico' })
  readonly idVenta: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo idProducto debe estar definido' })
  @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
  readonly idProducto: number;
}
