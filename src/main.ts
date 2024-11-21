import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('API Rest SIS257_Pizza_House')
  .setDescription('API Rest del Proyecto de SIS257_Pizza_House')
  .setVersion('1.0')
  .addTag('clientes')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('apiSIS257_Pizza_House', app, document);
  
  await app.listen(process.env.PORT);
  console.log(`App corriendo ${await app.getUrl()}/apiSIS257_Pizza_House`);
}
bootstrap();
