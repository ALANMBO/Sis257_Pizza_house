import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
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
  fecha_inicio: string;

  @Column('date', { nullable: false })
  fecha_fin: string;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;
}
