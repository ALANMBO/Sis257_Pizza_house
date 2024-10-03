import{
    Column,
    Entity,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
} from 'typeorm';

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('varchar', { length: 20 })
    nombre: string;

    @Column('varchar', { length: 15 })
    cargo: string;

    @Column('varchar', { length: 26 })
    telefono: string;

    @Column('varchar', { length: 50 })
    email: string;

    @Column('varchar', { length: 20 })
    salario: string;

    @Column('varchar', { length: 50 })
    fecha_nacimiento: string;
  fechaNacimiento: any;
}
