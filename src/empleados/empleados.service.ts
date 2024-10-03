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
    empleado.telefono = createEmpleadoDto.telefono.trim();
    empleado.email = createEmpleadoDto.email.trim();
    empleado.salario = createEmpleadoDto.salario;
    empleado.fechaNacimiento = createEmpleadoDto.fecha_nacimiento; 

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
    const empleadoUpdate = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadoRepository.save(empleadoUpdate);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    return this.empleadoRepository.softRemove(empleado);
  }
}

