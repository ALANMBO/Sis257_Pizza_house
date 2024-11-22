import { Categoria } from "src/categorias/entities/categoria.entity";
import { Ventadetalle } from "src/ventas-detalles/entities/ventas-detalle.entity";
import { Venta } from "src/ventas/entities/venta.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column('varchar', { length: 50, nullable: false })
    nombre: string;

    @Column('varchar', { length: 200, nullable: false })
    descripcion: string;

    @Column({name:'precio_unitario'})
    precioUnitario:number;

    @Column()
    stock: number;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion;

    @ManyToOne(()=>Categoria,categoria=>categoria.productos)
    @JoinColumn({name:'idCategoria',referencedColumnName:'id'})
    categoria: Categoria

    @OneToMany(()=>Ventadetalle,ventadetalle=>ventadetalle.producto)
    ventadetalles:Ventadetalle[];

    @OneToMany(()=>Venta,venta=>venta.producto)
    ventas:Venta[];
    

}


