import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, OneToMany } from 'typeorm';
import { ProductosIngrediente } from 'src/productos_ingredientes/entities/productos_ingrediente.entity'; // Importar la tabla intermedia

@Entity('ingredientes')
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 30 })
  nombre: string;
  
  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;

  
  @OneToMany(() => ProductosIngrediente, (productosIngrediente) => productosIngrediente.ingrediente)
  productosIngredientes: ProductosIngrediente[]; 
}
