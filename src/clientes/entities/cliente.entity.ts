import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';
@Entity('Cliente')
export class Cliente {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { length: 15 })
  razon_social: string;

  @Column('varchar', { length: 15 })
  nit: number;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'fecha_eliminacion',
    select: false,
  })
  deletedAt?: Date;
}
