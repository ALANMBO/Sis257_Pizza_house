import { Producto } from 'src/productos/entities/producto.entity';
import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ventadetalles')
export class Ventadetalle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false })
  cantidad: string;

  @Column('varchar', { length: 50, nullable: false })
  subtotal: string;

  @ManyToOne(() => Venta, (venta) => venta.ventadetalles)
  @JoinColumn({ name: 'id_venta', referencedColumnName: 'id' })
  venta: Venta;

  @ManyToOne(() => Producto, (producto) => producto.ventadetalles)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;
}
