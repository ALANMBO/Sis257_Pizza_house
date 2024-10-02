import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCategoriasProductoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(15, {
    message: 'El campo nombre no debe ser mayor a 15 caracteres',
    })
    readonly nombre: string;
}
