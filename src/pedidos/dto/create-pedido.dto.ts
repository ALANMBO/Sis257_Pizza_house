import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsDate } from 'class-validator';


export class CreatePedidoDto {
    @IsNotEmpty()
    @IsNumber()
    id_cliente: number;

    @IsNotEmpty()
    @IsNumber()
    id_empleado: number;

    @IsNotEmpty()
    @IsDate()
    fecha: Date;

    @IsNotEmpty()
    @IsString()
    estado: string;

    @IsNotEmpty()
    @IsNumber()
    total: number;

    @IsOptional()
    @IsNumber()
    id_promocion?: number; 

    @IsNotEmpty()
    @IsString()
    direccion_entrega: string;
}

