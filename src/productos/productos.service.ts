import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateProductosDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { CategoriasProducto } from 'src/categorias_productos/entities/categorias_producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) { }

  async create(createProductoDto: CreateProductosDto): Promise<Producto> {
    const existe = await this.productosRepository.findOne({
      where: {
        nombre: createProductoDto.nombre.trim(),
        idCategoria: { id: createProductoDto.idCategoria },
      },
    });
    if (existe) throw new ConflictException('El producto ya existe');

    const producto = new Producto();
    producto.nombre = createProductoDto.nombre.trim();
    producto.precio = createProductoDto.precio;
    producto.idCategoria = { id: createProductoDto.idCategoria } as CategoriasProducto;

    return this.productosRepository.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return this.productosRepository.find({ relations: ['idCategoria'] });
  }

  async findOne(id: string): Promise<Producto> {
    const producto = await this.productosRepository.findOne({
      where: { id },
      relations: ['idCategoria'],
    });
    if (!producto) throw new NotFoundException('El producto no existe');
    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    const producto = await this.findOne(id);
    producto.nombre = updateProductoDto.nombre.trim();
    producto.precio = updateProductoDto.precio;
    producto.idCategoria = { id: updateProductoDto.idCategoria } as CategoriasProducto;

    return this.productosRepository.save(producto);
  }

  async remove(id: string): Promise<void> {
    const producto = await this.findOne(id);
    await this.productosRepository.softRemove(producto);
  }
}
