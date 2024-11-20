import { PartialType } from '@nestjs/swagger';
import { CreateDetallePedidoDto } from './create-detalle_pedido.dto';

export class UpdateDetallePedidoDto extends PartialType(CreateDetallePedidoDto) {}
