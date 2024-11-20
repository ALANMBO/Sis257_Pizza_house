import { Module } from '@nestjs/common';
import { MetodosPagosService } from './metodos_pagos.service';
import { MetodosPagosController } from './metodos_pagos.controller';
import { MetodosPago } from './entities/metodos_pago.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MetodosPago])],
  controllers: [MetodosPagosController],
  providers: [MetodosPagosService],
})
export class MetodosPagosModule {}
