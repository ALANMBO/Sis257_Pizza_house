import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity('promociones')
  export class promociones {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { length: 30 })
    descripcion_promocion: string;
    
    @DeleteDateColumn({
      type: 'timestamp',
      name: 'fecha_eliminacion',
      select: false,
    })
    deletedAt?: Date;
  }
