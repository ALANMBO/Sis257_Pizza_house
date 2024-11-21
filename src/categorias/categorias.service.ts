import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria) private categoriasRepository: Repository<Categoria>) { }


    
  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriasRepository.create({
      nombre: createCategoriaDto.nombre.trim(),
    })
    return this.categoriasRepository.save(categoria)
  }



  async findAll(): Promise<Categoria[]> {

    return this.categoriasRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriasRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException(`La categoria con el id ${id} no existe`)
    }
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    const actualizaCategoria = Object.assign(categoria, updateCategoriaDto);
    return  this.categoriasRepository.save(actualizaCategoria);
  }

  async remove(id: number) {
    const categoria = await this.findOne(id)
    return this.categoriasRepository.delete(categoria.id);
  }
}
