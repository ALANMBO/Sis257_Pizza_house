import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto'; 
import { UpdateEmpleadoDto } from './dto/update-empleado.dto'; 
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const existe = await this.empleadoRepository.findOneBy({
      email: createEmpleadoDto.email.trim(),
    });
    if (existe) {
      throw new ConflictException('El empleado ya existe con este email');
    }

    const empleado = new Empleado();
    empleado.nombre = createEmpleadoDto.nombre.trim();
    empleado.cargo = createEmpleadoDto.cargo.trim();
    empleado.telefono = createEmpleadoDto.telefono; 
    empleado.email = createEmpleadoDto.email.trim();
    empleado.salario = createEmpleadoDto.salario;
    empleado.fecha_nacimiento = createEmpleadoDto.fecha_nacimiento; 

    return this.empleadoRepository.save(empleado);
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find();
  }

  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadoRepository.findOneBy({ id });
    if (!empleado) {
      throw new NotFoundException('El empleado no existe');
    }
    return empleado;
  }

  async update(
    id: number,
    updateEmpleadoDto: UpdateEmpleadoDto,
  ): Promise<Empleado> {
    const empleado = await this.findOne(id);

    if (updateEmpleadoDto.email && updateEmpleadoDto.email !== empleado.email) {
      const existe = await this.empleadoRepository.findOneBy({
        email: updateEmpleadoDto.email.trim(),
      });
      if (existe && existe.id !== id) {
        throw new ConflictException('Ya existe un empleado con este email');
      }
    }
    empleado.nombre = updateEmpleadoDto.nombre?.trim() || empleado.nombre;
    empleado.cargo = updateEmpleadoDto.cargo?.trim() || empleado.cargo;
    empleado.telefono = updateEmpleadoDto.telefono || empleado.telefono; 
    empleado.email = updateEmpleadoDto.email?.trim() || empleado.email;
    empleado.salario = updateEmpleadoDto.salario || empleado.salario; 
    empleado.fecha_nacimiento = updateEmpleadoDto.fecha_nacimiento || empleado.fecha_nacimiento; 

    return this.empleadoRepository.save(empleado);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    return this.empleadoRepository.softRemove(empleado);
  }
}
