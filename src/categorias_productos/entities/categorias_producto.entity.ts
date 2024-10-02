import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias_productos')
export class CategoriasProducto {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 15 })
    nombre: string;
}
