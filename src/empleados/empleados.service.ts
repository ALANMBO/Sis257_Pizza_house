import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const empleado = this.empleadosRepository.create({
      nombres: createEmpleadoDto.nombres.trim(),
      apellidos: createEmpleadoDto.apellidos.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      salario: createEmpleadoDto.salario,
      fechaContratacion: createEmpleadoDto.fechaContratacion,
    });
    return this.empleadosRepository.save(empleado);
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find();
  }

  async findOne(id: number): Promise<Empleado> {
    const existeEmpleado = await this.empleadosRepository.findOne({ where: { id } });
    if (!existeEmpleado) {
      throw new NotFoundException(`El empleado con el id ${id} no existe`);
    }
    return existeEmpleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id);
    if (!empleado) {
      throw new NotFoundException(`El empleado con el id ${id} no existe`);
    }

    const actualizarEmpleado = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadosRepository.save(actualizarEmpleado);
  }

  async remove(id: number) {
    const empleado = await this.findOne(id);
    if (!empleado) {
      throw new NotFoundException(`El empleado con el id ${id} no existe`);
    }
    return this.empleadosRepository.delete(empleado.id);
  }
}
