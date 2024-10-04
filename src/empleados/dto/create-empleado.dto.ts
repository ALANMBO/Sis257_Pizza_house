import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEmail, IsNumber, IsDate, MaxLength, Min } from "class-validator";
import { Type } from 'class-transformer';  

export class CreateEmpleadoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo empleado es obligatorio' })
    @IsString({ message: 'El campo empleado debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo empleado no debe ser mayor a 20 caracteres' })
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
    @IsNotEmpty({ message: 'El campo teléfono es obligatorio' })
    @IsNumber({}, { message: 'El campo teléfono debe ser de tipo numérico' })
    @Min(1000000, { message: 'El campo teléfono debe tener al menos 7 dígitos' })
    readonly telefono: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo salario es obligatorio' })
    @IsNumber({}, { message: 'El campo salario debe ser de tipo numérico' })
    @Min(0, { message: 'El campo salario debe ser un valor positivo' })
    readonly salario: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fecha de nacimiento es obligatorio' })
    @IsDate({ message: 'El campo fecha de nacimiento debe ser una fecha válida' })
    @Type(() => Date) 
    readonly fecha_nacimiento: Date;
}
