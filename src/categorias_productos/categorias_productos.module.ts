import { Module } from '@nestjs/common';
import { CategoriasProductosService } from './categorias_productos.service';
import { CategoriasProductosController } from './categorias_productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasProducto } from './entities/categorias_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriasProducto])],
  controllers: [CategoriasProductosController],
  providers: [CategoriasProductosService],
})
export class CategoriasProductosModule {}
