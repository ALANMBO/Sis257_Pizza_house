import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsNumber, IsDate, MaxLength, Min } from "class-validator";
import { Type } from 'class-transformer';  

export class CreateEmpleadoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo nombre no debe ser mayor a 20 caracteres' })
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo email es obligatorio' })
    @IsEmail({}, { message: 'El campo email debe ser un correo electrónico válido' })
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo cargo es obligatorio' })
    @IsString({ message: 'El campo cargo debe ser de tipo cadena' })
    @MaxLength(30, { message: 'El campo cargo no debe ser mayor a 30 caracteres' })
    readonly cargo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo telefono es obligatorio' })
    @IsNumber({}, { message: 'El campo telefono debe ser de tipo numérico' })
    @Min(1000000, { message: 'El campo telefono debe tener al menos 7 dígitos' })
    readonly telefono: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo salario es obligatorio' })
    @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
    @Min(0, { message: 'El campo salario debe ser un valor positivo' })
    readonly salario: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fecha de Nacimiento es obligatorio' })
    @IsDate({ message: 'El campo fecha de Nacimiento debe ser una fecha válida' })
    @Type(() => Date) 
    readonly fechaNacimiento: Date;
}
