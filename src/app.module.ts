import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from './clientes/clientes.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { VentasModule } from './ventas/ventas.module';
import { VentasDetallesModule } from './ventas-detalles/ventas-detalles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'autorack.proxy.rlwy.net', 
      port: +process.env.DB_PORT || 14394,     
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'cctNrEabDdRFLYZKnqnEouSLxpxJoqia',
      database: process.env.DB_NAME || 'railway',
      entities: [__dirname + '/**/*.entity.{ts,js}'], 
      autoLoadEntities: true,
    
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    }),
    ClientesModule,
    EmpleadosModule,
    ProductosModule,
    CategoriasModule,
    VentasModule,
    VentasDetallesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
