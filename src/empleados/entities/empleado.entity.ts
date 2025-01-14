import { Venta } from "src/ventas/entities/venta.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleados')
export class Empleado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50, nullable: false })
    nombres: string;


    @Column('varchar', { length: 50, nullable: false })
    apellidos: string;

    @Column('varchar', { length: 30, nullable: false })
    cargo: string;

    @Column()
    salario: number;

    @Column({type:'date',  name: 'fecha_contratacion' })
    fechaContratacion: Date;

    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;


    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @OneToMany(() => Venta, (venta) => venta.empleado)
    ventas: Venta[];

    get nombreCompleto(): string {
        return `${this.nombres} ${this.apellidos}`;
    }

    toJSON() {
        return {
            ...this,
            nombreCompleto: this.nombreCompleto,
        };
    }
}
