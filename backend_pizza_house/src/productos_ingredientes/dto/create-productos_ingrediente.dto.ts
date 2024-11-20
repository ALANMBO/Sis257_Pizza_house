import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";

export class CreateProductosIngredienteDto {

    @ApiProperty()
    @IsDefined({ message: 'El campo idProducto debe estar definido' })
    @IsNumber({}, { message: 'El campo idProducto debe ser tipo numérico' })
    readonly idProducto: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idIngrediente debe estar definido' })
    @IsNumber({}, { message: 'El campo idIngrediente debe ser tipo numérico' })
    readonly idIngrediente: number;


}
