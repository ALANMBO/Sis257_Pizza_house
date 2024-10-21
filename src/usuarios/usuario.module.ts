import { Module } from '@nestjs/common';
import { UsuariosService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  controllers: [UsuarioController],
  providers: [UsuariosService],
})
export class UsuarioModule {}
