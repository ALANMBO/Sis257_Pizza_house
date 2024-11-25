import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateVentaDetalleDto {
    @IsNotEmpty()
    @IsNumber()
    readonly idProducto: number;

    @IsNotEmpty()
    @IsNumber()
    readonly cantidad: number;

    @IsNotEmpty()
    @IsNumber()
    readonly precioUnitario: number;

    @IsNotEmpty()
    @IsNumber()
    readonly subTotal: number;
}
