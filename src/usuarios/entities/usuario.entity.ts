import { Empleado } from 'src/empleados/entities/empleado.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
 import * as bcrypt from 'bcrypt';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50, nullable: false, name: 'nombre_usuario' })
  nombreUsuario: string;

  @Column('varchar', { length: 5000, nullable: true })
  clave: string;


  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
  
  //un usuario puede pertenecer a un solo empleado
  @OneToOne(() => Empleado, (empleado) => empleado.usuario)
  empleados: Empleado;

   @BeforeInsert()
   @BeforeUpdate()
   async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
   }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
    }
}

