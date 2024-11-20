
import { Producto } from 'src/productos/entities/producto.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity('Categorias_producto')
export class CategoriasProducto {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 15 })
  nombre: string;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @OneToMany(() => Producto, (producto) => producto.idCategoria)
  productos: Producto[]; 
}
