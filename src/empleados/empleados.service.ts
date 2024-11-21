import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class EmpleadosService {
  constructor
    (@InjectRepository(Empleado) private empleadosRepository: Repository<Empleado>,
    ) { }

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const  empleado = this.empleadosRepository.create({
      nombres: createEmpleadoDto.nombres.trim(),
      apellidos: createEmpleadoDto.apellidos.trim(),
      cargo: createEmpleadoDto.cargo.trim(),
      salario: createEmpleadoDto.salario,
      fechaContratacion: createEmpleadoDto.fechaContratacion,
      usuario: { id: createEmpleadoDto.idUsuario }
    })
    return this.empleadosRepository.save(empleado)
  }

  async findAll(): Promise<Empleado[]> {
    return this.empleadosRepository.find({ relations: ['usuario'] });
  }

  async findOne(id: number): Promise<Empleado> {
    const existeEmpleado = await this.empleadosRepository.findOne({
      where: { id },
      relations: ['usuario']

    })
    if (!existeEmpleado) {
      throw new NotFoundException(`EL empleado con el id ${id} no existe`)
    }
    return existeEmpleado;
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id);
    if (!empleado) {
      throw new NotFoundException(`El empleado con el id ${id} no existe`);
    }

    const actualizarEmpleado = Object.assign(empleado, updateEmpleadoDto);
    actualizarEmpleado.usuario = { id: updateEmpleadoDto.idUsuario } as Usuario;
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
