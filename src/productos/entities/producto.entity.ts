import { CategoriasProducto } from "src/categorias_productos/entities/categorias_producto.entity";
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column('varchar', { length: 70 })
    nombre: string;

    @Column('decimal')
    precio: number;

    @Column({ nullable: true })
    disponibilidad?: string;
  
    @Column({ nullable: true })
    tamanio?: string;

    @ManyToOne(() => CategoriasProducto, (categoria) => categoria.productos)
    @JoinColumn({ name: 'idCategoria', referencedColumnName: 'id' })
    idCategoria: CategoriasProducto; 
}
