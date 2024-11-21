import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorias')
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar', { length: 50, nullable: false })
    nombre: string;


    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_modificacion' }) 
    fechaModificacion: Date;


    
    //Una categoría puede tener varios productos
    @OneToMany(()=>Producto,producto=>producto.categoria)
    productos:Producto[];

}
