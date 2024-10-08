import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, MaxLength, IsNumber } from "class-validator";

export class CreatePromocionDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descripción es obligatorio' })
    @IsString({ message: 'El campo descripción  debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo descripción  no debe exceder los 20 caracteres' })
    readonly descripcion: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descuento porcentaje es obligatorio' })
    @IsNumber({}, { message: 'El campo descuento porcentaje debe ser un número' })
    readonly descuento_porcentaje: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fecha de inicio es obligatorio' })
    @IsDateString({},{ message: 'El campo fecha de inicio debe ser una fecha válida' })
    readonly fecha_inicio: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fecha de fin es obligatorio' })
    @IsDateString({},{ message: 'El campo fecha de fin debe ser una fecha válida' })
    readonly fecha_fin: string;
}
