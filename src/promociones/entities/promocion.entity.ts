import { Pedido } from 'src/pedidos/entities/pedido.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('promociones')
export class Promocion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30, nullable: false })
  descripcion: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  descuento_porcentaje: number;

  @Column('date', { nullable: false })
  fecha_inicio: Date;

  @Column('date', { nullable: false })
  fecha_fin: Date; 

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @OneToMany(() => Pedido, (pedido) => pedido.promocion)
  pedidos: Pedido[]; 
}
