import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromocionDto } from './dto/create-promocion.dto'; // Asegúrate de que esta ruta sea correcta
import { UpdatePromocionDto } from './dto/update-promocion.dto'; // Asegúrate de que esta ruta sea correcta
import { promociones } from './entities/promocion.entity'; // Asegúrate de que esta ruta sea correcta

@Injectable()
export class PromocionesService {
  constructor(
    @InjectRepository(promociones)
    private promocionesRepository: Repository<promociones>,
  ) {}

  async create(createPromocionDto: CreatePromocionDto): Promise<promociones> {
    const existe = await this.promocionesRepository.findOneBy({
      descripcion_promocion: createPromocionDto.descripcion_promocion.trim(),
    });
    if (existe) {
      throw new ConflictException('La promoción con este nombre ya existe');
    }

    const promocion = new promociones();
    promocion.descripcion_promocion = createPromocionDto.descripcion_promocion.trim();
    promocion.descripcion_promocion = createPromocionDto.descripcion_promocion.trim(); // Ajusta según las propiedades que necesites

    return this.promocionesRepository.save(promocion);
  }

  async findAll(): Promise<promociones[]> {
    return this.promocionesRepository.find();
  }

  async findOne(id: number): Promise<promociones> {
    const promocion = await this.promocionesRepository.findOneBy({ id });
    if (!promocion) {
      throw new NotFoundException('La promoción no existe');
    }
    return promocion;
  }

  async update(
    id: number,
    updatePromocionDto: UpdatePromocionDto,
  ): Promise<promociones> {
    const promocion = await this.findOne(id);

    const promocionUpdate = Object.assign(promocion, updatePromocionDto);
    return this.promocionesRepository.save(promocionUpdate);
  }

  async remove(id: number) {
    const promocion = await this.findOne(id);
    await this.promocionesRepository.softRemove(promocion);
  }
}

