import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocion } from './entities/promocion.entity'; 
import { PromocionesService } from './promociones.service'; 
import { PromocionesController } from './promociones.controller'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Promocion]), 
  ],
  providers: [PromocionesService],
  controllers: [PromocionesController],
  exports: [PromocionesService],
})
export class PromocionesModule {}
