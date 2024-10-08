import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { Promocion } from './entities/promocion.entity'; 

@Injectable()
export class PromocionesService {
  constructor(
    @InjectRepository(Promocion) 
    private promocionesRepository: Repository<Promocion>,
  ) {}

  async create(createPromocionDto: CreatePromocionDto): Promise<Promocion> {

    const existe = await this.promocionesRepository.findOneBy({
      descripcion: createPromocionDto.descripcion.trim(),
    });

    if (existe) {
      throw new ConflictException('La promoción con esta descripción ya existe');
    }


    const promocion = this.promocionesRepository.create(createPromocionDto); 
    return this.promocionesRepository.save(promocion);  
  }

  async findAll(): Promise<Promocion[]> {
    return this.promocionesRepository.find();
  }

  async findOne(id: number): Promise<Promocion> {
    const promocion = await this.promocionesRepository.findOneBy({ id });
    if (!promocion) {
      throw new NotFoundException('La promoción no existe');
    }
    return promocion;
  }

  async update(
    id: number,
    updatePromocionDto: UpdatePromocionDto,
  ): Promise<Promocion> {
    const promocion = await this.findOne(id);

    const promocionUpdate = Object.assign(promocion, updatePromocionDto);
    return this.promocionesRepository.save(promocionUpdate);
  }

  async remove(id: number): Promise<void> {
    const promocion = await this.findOne(id);
    await this.promocionesRepository.softRemove(promocion); 
  }
}
