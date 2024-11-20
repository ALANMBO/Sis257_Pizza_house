import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';


@Entity('productos_ingredientes')
export class ProductosIngrediente {
  
  @PrimaryGeneratedColumn()
  id: number;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  @ManyToOne(() => Producto, producto => producto.productosIngredientes, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;

  @ManyToOne(() => Ingrediente, ingrediente => ingrediente.productosIngredientes, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idIngrediente' })
  ingrediente: Ingrediente;
}
