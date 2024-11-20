import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('detalle_pedido') 
export class DetallePedido {
  @PrimaryGeneratedColumn('identity') 
  id: number;

  @Column('integer', { name: 'id_pedido' }) 
  idPedido: number;

  @Column('integer', { name: 'id_producto' }) 
  idProducto: number;

  @Column('integer')
  cantidad: number;


  @Column('decimal', { precision: 10, scale: 2, name: 'precio_unitario' }) 
  precioUnitario: number;


  @Column('decimal', { precision: 10, scale: 2, nullable: true }) 
  descuento: number;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @ManyToOne(() => Pedido, (pedido) => pedido.detalles)
  @JoinColumn({ name: 'id_pedido', referencedColumnName: 'id' }) 
  pedido: Pedido;

  @ManyToOne(() => Producto, (producto) => producto.detalles) 
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' }) 
  producto: Producto;
}
