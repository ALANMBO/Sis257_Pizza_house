import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoriaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombre no debe ser nemor a 50 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser mayor a 4 caracteres' })
    readonly nombre:string;
}
