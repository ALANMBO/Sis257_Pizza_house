import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateProductosIngredienteDto } from './dto/create-productos_ingrediente.dto';
import { UpdateProductosIngredienteDto } from './dto/update-productos_ingrediente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosIngrediente } from './entities/productos_ingrediente.entity';
import { Repository } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Ingrediente } from 'src/ingredientes/entities/ingrediente.entity';

@Injectable()
export class ProductosIngredientesService {
  constructor(
    @InjectRepository(ProductosIngrediente)
    private productosIngredientesRepository: Repository<ProductosIngrediente>,
  ) {}

  async create(createProductosIngredienteDto: CreateProductosIngredienteDto): Promise<ProductosIngrediente> {
    const existe = await this.productosIngredientesRepository.findOne({
      where: {
        producto: { id: createProductosIngredienteDto.idProducto },
        ingrediente: { id: createProductosIngredienteDto.idIngrediente },
      },
    });

    if (existe) throw new ConflictException('La relación entre el producto y el ingrediente ya existe');

    const productosIngrediente = new ProductosIngrediente();
    productosIngrediente.producto = { id: createProductosIngredienteDto.idProducto } as Producto;
    productosIngrediente.ingrediente = { id: createProductosIngredienteDto.idIngrediente } as Ingrediente;

    return this.productosIngredientesRepository.save(productosIngrediente);
  }

  async findAll(): Promise<ProductosIngrediente[]> {
    return this.productosIngredientesRepository.find({ relations: ['producto', 'ingrediente'] });
  }

  async findOne(id: number): Promise<ProductosIngrediente> {
    const productosIngrediente = await this.productosIngredientesRepository.findOne({
      where: { id },
      relations: ['producto', 'ingrediente'],
    });
    if (!productosIngrediente) throw new NotFoundException('La relación entre el producto y el ingrediente no existe');
    return productosIngrediente;
  }

  async update(id: number, updateProductosIngredienteDto: UpdateProductosIngredienteDto): Promise<ProductosIngrediente> {
    const productosIngrediente = await this.findOne(id);
    
    productosIngrediente.producto = { id: updateProductosIngredienteDto.idProducto } as Producto;
    productosIngrediente.ingrediente = { id: updateProductosIngredienteDto.idIngrediente } as Ingrediente;

    return this.productosIngredientesRepository.save(productosIngrediente);
  }

  async remove(id: number) {
    const productosIngrediente = await this.findOne(id);
    await this.productosIngredientesRepository.softRemove(productosIngrediente);
  }
}
