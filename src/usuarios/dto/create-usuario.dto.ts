import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo id es obligatorio' })
    @IsString({ message: 'El campo id debe ser de tipo cadena' })
    readonly id: string; 

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
    @IsString({ message: 'El campo usuario debe ser de tipo cadena' })
    @MaxLength(30, { message: 'El campo usuario no debe ser mayor a 30 caracteres' })
    readonly usuario: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo clave es obligatorio' })
    @IsString({ message: 'El campo clave debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo clave no debe ser mayor a 100 caracteres' })
    readonly clave: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo tipo de usuario es obligatorio' })
    @IsString({ message: 'El campo tipo de usuario debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo tipo de usuario no debe ser mayor a 20 caracteres' })
    readonly tipo_usuario: string;
}

