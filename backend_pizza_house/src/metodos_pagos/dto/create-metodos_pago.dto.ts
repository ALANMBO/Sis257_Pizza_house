import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber, IsPositive, IsString, IsNotEmpty } from "class-validator";

export class CreateMetodosPagoDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo idPedido debe estar definido' })
    @IsNumber({}, { message: 'El campo idPedido debe ser numérico' })
    readonly idPedido: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo tipo debe estar definido' })
    @IsNumber({}, { message: 'El campo tipo debe ser numérico' })
    @IsPositive({ message: 'El campo tipo debe ser un número positivo' })
    readonly tipo: number; 

    @ApiProperty()
    @IsDefined({ message: 'El campo estado debe estar definido' })
    @IsString({ message: 'El campo estado debe ser un texto' })
    @IsNotEmpty({ message: 'El campo estado no puede estar vacío' })
    readonly estado: string;

    @ApiProperty()
    @IsDefined({ message: 'El campo monto debe estar definido' })
    @IsString({ message: 'El campo monto debe ser un texto' }) 
    @IsNotEmpty({ message: 'El campo monto no puede estar vacío' })
    readonly monto: string;
}
