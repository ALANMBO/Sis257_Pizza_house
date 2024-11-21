import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clientesRepository: Repository<Cliente>,) { }

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.clientesRepository.create({
      nombres: createClienteDto.nombres.trim(),
      apellidos: createClienteDto.apellidos.trim(),
      direccion: createClienteDto.direccion.trim(),
      celular: createClienteDto.celular.trim(), 
    });
    return this.clientesRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clientesRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const existe = await this.clientesRepository.findOneBy({ id });
    if (!existe) {
      throw new NotFoundException(`El cliente con el id ${id} no existe`);
    }
    return existe;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.findOne(id);
    const actualizaCliente = Object.assign(cliente, {
      ...updateClienteDto,
      celular: updateClienteDto.celular?.trim(), 
    });
    return this.clientesRepository.save(actualizaCliente);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clientesRepository.delete(cliente.id);
  }
}
