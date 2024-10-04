import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
} from 'typeorm';

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
}
