import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
  } from 'typeorm';
  
  @Entity('pedidos')
  export class Pedido {
    @PrimaryGeneratedColumn('identity')
    id: number;
  
    @Column('int')
    id_cliente: number;
  
    @Column('int')
    id_empleado: number;
  
    @Column('date')
    fecha: Date;
  
    @Column('varchar', { length: 20 })
    estado: string;
  
    @Column('numeric')
    total: number;
  
    @Column('int', { nullable: true })
    id_promocion?: number; 
  
    @Column('varchar', { length: 255 })
    direccion_entrega: string;
  
    @DeleteDateColumn({
      type: 'timestamp',
      name: 'fecha_eliminacion',
      select: false,
    })
    deletedAt?: Date;
  }
  
