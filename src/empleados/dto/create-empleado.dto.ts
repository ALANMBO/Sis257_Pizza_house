import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateEmpleadoDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo empleado es obligatorio' })
    @IsString({ message: 'El campo empleado debe ser de tipo cadena' })
    @MaxLength(20, { message: 'El campo empleado no debe ser mayor a 20 caracteres',
    })
    readonly nombre: string;
  email: any;
  cargo: any;
  telefono: any;
  salario: string;
  fecha_nacimiento: any;
}
