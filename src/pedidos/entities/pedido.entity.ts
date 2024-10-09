import { IsDate } from 'class-validator';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Promocion } from 'src/promociones/entities/promocion.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('int', { name: 'id_cliente' })
  idCliente: number;

  @Column('int', { name: 'id_empleado' })
  idEmpleado: number;

  @Column('int', { name: 'id_promocion', nullable: true })
  idPromocion?: number;
  
  @IsDate()
  @Column({type:'date'})
  fecha: Date;

  @Column('varchar', { length: 20 })
  estado: string;

  @Column('numeric')
  total: number;

  @Column('varchar', { name: 'direccion_entrega', length: 255 })
  direccionEntrega: string;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @ManyToOne(() => Empleado, (empleado) => empleado.pedidos)
  @JoinColumn({ name: 'id_empleado', referencedColumnName: 'id' })
  empleado: Empleado;

  @ManyToOne(() => Promocion, (promocion) => promocion.pedidos)
  @JoinColumn({ name: 'id_promocion', referencedColumnName: 'id' })
  promocion: Promocion;

  
}
