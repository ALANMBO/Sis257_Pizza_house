import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Ventadetalle } from 'src/ventas-detalles/entities/ventas-detalle.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;

  @Column({ name: 'precio_unitario' })
  precioUnitario: number;

  @Column({ name: 'total_venta' })
  totalVenta: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  //  muchas ventas puede realizar  un cliente
  @ManyToOne(() => Cliente, (cliente) => cliente.ventas)
  @JoinColumn({ name: 'idCliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @ManyToOne(() => Producto, (producto) => producto.ventas)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;

  @ManyToOne(() => Empleado, (empleado) => empleado.ventas)
  @JoinColumn({ name: 'id_Empleado', referencedColumnName: 'id' })
  empleado: Empleado;

  //una venta puede tener varios detalles de venta
  @OneToMany(() => Ventadetalle, (ventadetalle) => ventadetalle.venta)
  ventadetalles: Ventadetalle[];

}
