import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredientesRepository: Repository<Ingrediente>,
  ) {}

  async create(createIngredienteDto: CreateIngredienteDto): Promise<Ingrediente> {
    const existe = await this.ingredientesRepository.findOneBy({
      nombre: createIngredienteDto.nombre.trim(),
    });
    if (existe) {
      throw new ConflictException('El ingrediente con este nombre ya existe');
    }

    const ingrediente = new Ingrediente();
    ingrediente.nombre = createIngredienteDto.nombre.trim();

    return this.ingredientesRepository.save(ingrediente);
  }

  async findAll(): Promise<Ingrediente[]> {
    return this.ingredientesRepository.find();
  }

  async findOne(id: number): Promise<Ingrediente> {
    const ingrediente = await this.ingredientesRepository.findOneBy({ id });
    if (!ingrediente) {
      throw new NotFoundException('El ingrediente no existe');
    }
    return ingrediente;
  }

  async update(
    id: number,
    updateIngredienteDto: UpdateIngredienteDto,
  ): Promise<Ingrediente> {
    const ingrediente = await this.findOne(id);

    const ingredienteUpdate = Object.assign(ingrediente, updateIngredienteDto);
    return this.ingredientesRepository.save(ingredienteUpdate);
  }

  async remove(id: number) {
    const ingrediente = await this.findOne(id);
    await this.ingredientesRepository.softRemove(ingrediente);
  }
}
