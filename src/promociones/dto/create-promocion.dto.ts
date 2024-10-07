import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsNumber, IsDate, MaxLength, Min, IsDateString } from "class-validator";
import { Type } from 'class-transformer';

export class CreatePromocionDto {
@IsNotEmpty()
id: number;

@IsNotEmpty()
@IsString()
descripcion_promocion: string;

@IsNotEmpty()
@IsString()
descuento_porcentaje: number;

@IsNotEmpty()
@IsDateString()
fecha_inicio: string;

@IsNotEmpty()
@IsDateString()
fecha_fin: string;

}