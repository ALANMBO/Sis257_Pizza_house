import { Module } from '@nestjs/common';
import { VentadetallesService } from './ventas-detalles.service';
import { VentasDetallesController } from './ventas-detalles.controller';
import { Ventadetalle } from './entities/ventas-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ventadetalle])],
  controllers: [VentasDetallesController],
  providers: [VentadetallesService],
})
export class VentasDetallesModule {}
  