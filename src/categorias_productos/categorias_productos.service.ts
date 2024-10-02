import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriasProductoDto } from './dto/create-categorias_producto.dto';
import { UpdateCategoriasProductoDto } from './dto/update-categorias_producto.dto';
import { CategoriasProducto } from './entities/categorias_producto.entity';

@Injectable()
export class CategoriasProductosService {
  constructor(
    @InjectRepository(CategoriasProducto)
    private categoriasRepository: Repository<CategoriasProducto>,
  ) {}

  async create(createCategoriasProductoDto: CreateCategoriasProductoDto): Promise<CategoriasProducto> {
    const existe = await this.categoriasRepository.findOneBy({
      nombre: createCategoriasProductoDto.nombre.trim(),
    });
    if (existe) throw new ConflictException('La categoría ya existe');

    const categoria = new CategoriasProducto();
    categoria.nombre = createCategoriasProductoDto.nombre.trim();
    
    return this.categoriasRepository.save(categoria);
  }

  async findAll(): Promise<CategoriasProducto[]> {
    return this.categoriasRepository.find();
  }

  async findOne(id: number): Promise<CategoriasProducto> {
    const categoria = await this.categoriasRepository.findOneBy({ id });
    if (!categoria) throw new NotFoundException('La categoría no existe');
    return categoria;
  }

  async update(
    id: number,
    updateCategoriasProductoDto: UpdateCategoriasProductoDto,
  ): Promise<CategoriasProducto> {
    const categoria = await this.findOne(id);
    const categoriaUpdate = Object.assign(categoria, updateCategoriasProductoDto);
    return this.categoriasRepository.save(categoriaUpdate);
  }

  async remove(id: number){
    const categoria = await this.findOne(id);
    await this.categoriasRepository.softRemove(categoria);
    console.log("hola",categoria);

  }
}
