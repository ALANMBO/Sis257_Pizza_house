import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodosPagosService } from './metodos_pagos.service';
import { CreateMetodosPagoDto } from './dto/create-metodos_pago.dto';
import { UpdateMetodosPagoDto } from './dto/update-metodos_pago.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('metodos-pagos')
@Controller('metodos-pagos')
export class MetodosPagosController {
  constructor(private readonly metodosPagosService: MetodosPagosService) {}

  @Post()
  create(@Body() createMetodosPagoDto: CreateMetodosPagoDto) {
    return this.metodosPagosService.create(createMetodosPagoDto);
  }

  @Get()
  findAll() {
    return this.metodosPagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodosPagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodosPagoDto: UpdateMetodosPagoDto) {
    return this.metodosPagosService.update(+id, updateMetodosPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodosPagosService.remove(+id);
  }
}
