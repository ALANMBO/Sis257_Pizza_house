import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity('usuarios')
  export class Usuario {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('varchar', { length: 30, unique: true }) // Asegúrate de que el usuario sea único
    usuario: string;
  
    @Column('varchar', { length: 100 })
    clave: string;
  
    @Column('varchar', { length: 20 })
    tipo_usuario: string;
  
    @DeleteDateColumn({
      type: 'timestamp',
      name: 'fecha_eliminacion',
      select: false,
    })
    deletedAt?: Date;
  }
  
