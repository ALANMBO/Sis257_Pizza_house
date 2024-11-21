import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>) { }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existe = await this.usuariosRepository.findOneBy({
      nombreUsuario: createUsuarioDto.nombreUsuario.trim(),
    });
    if (existe) {
      throw new ConflictException('El usuario ya existe');
    }

    const usuario = new Usuario();
    usuario.nombreUsuario = createUsuarioDto.nombreUsuario.trim();
     usuario.clave = process.env.DEFAULT_PASSWORD;
   
    const usuarioBd = await this.usuariosRepository.save(usuario);
    delete usuarioBd.clave;

    return usuarioBd;
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe`);
    }
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuariosRepository.save(usuarioUpdate);
  }
  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.delete(usuario.id);
  }

  // async validate(nombreUsuario: string, clave: string): Promise<Usuario> {
  //   const usuarioOk = await this.usuariosRepository.findOne({
  //     where: { nombreUsuario },
  //     select: ['id', 'nombreUsuario', 'clave', 'email'],
  //   });

  //   if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

  //   if (!(await usuarioOk?.validatePassword(clave))) {
  //     throw new UnauthorizedException('Clave incorrecta');
  //   }

  //   delete usuarioOk.clave;
  //   return usuarioOk;
  // }

}
