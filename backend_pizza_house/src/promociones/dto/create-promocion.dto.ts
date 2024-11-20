import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsDateString, MaxLength, IsNumber } from "class-validator";

export class CreatePromocionDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descripción es obligatorio' })
    @IsString({ message: 'El campo descripción debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo descripción no debe exceder los 20 caracteres' })
    readonly descripcion: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descuentoPorcentaje es obligatorio' })
    @IsNumber({}, { message: 'El campo descuentoPorcentaje debe ser un número' })
    readonly descuentoPorcentaje: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fechaInicio es obligatorio' })
    @IsDateString({}, { message: 'El campo fechaInicio debe ser una fecha válida' })
    readonly fechaInicio: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo fechaFin es obligatorio' })
    @IsDateString({}, { message: 'El campo fechaFin debe ser una fecha válida' })
    readonly fechaFin: string;
}
