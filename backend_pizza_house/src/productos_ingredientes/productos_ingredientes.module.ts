import { Module } from '@nestjs/common';
import { ProductosIngredientesService } from './productos_ingredientes.service';
import { ProductosIngredientesController } from './productos_ingredientes.controller';
import { ProductosIngrediente } from './entities/productos_ingrediente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosIngrediente])], 
  controllers: [ProductosIngredientesController],
  providers: [ProductosIngredientesService],
})
export class ProductosIngredientesModule {}
