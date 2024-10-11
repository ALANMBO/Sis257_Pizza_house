import { CategoriasProducto } from "src/categorias_productos/entities/categorias_producto.entity";
import { DetallePedido } from 'src/detalle_pedido/entities/detalle_pedido.entity'; 
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    DeleteDateColumn 
} from 'typeorm';

@Entity('productos') 
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;  

    @Column('varchar', { length: 70 })
    nombre: string;

    @Column('decimal')
    precio: number;

    @Column({ nullable: true })
    disponibilidad?: number;

    @Column({ nullable: true })
    tamanio?: number;

    @DeleteDateColumn()
    deletedAt?: Date; 

    @ManyToOne(() => CategoriasProducto, (categoria) => categoria.productos)
    @JoinColumn({ name: 'idCategoria', referencedColumnName: 'id' })
    idCategoria: CategoriasProducto;

    @OneToMany(() => DetallePedido, (detalle) => detalle.producto) 
    detalles: DetallePedido[];
}
