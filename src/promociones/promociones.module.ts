import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { promociones } from './entities/promocion.entity'; 
import { PromocionesService } from './promociones.service'; 
import { PromocionesController } from './promociones.controller'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([promociones]), 
  ],
  providers: [PromocionesService],
  controllers: [PromocionesController],
  exports: [PromocionesService],
})
export class PromocionesModule {}
