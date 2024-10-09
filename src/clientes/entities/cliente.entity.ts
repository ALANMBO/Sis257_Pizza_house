import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('clientes') 
export class Cliente {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 15 })
  razon_social: string;

  @Column('varchar', { length: 15 })
  nit: number; 

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[]; 
}
