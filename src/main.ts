import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { urlencoded, json } from 'express';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb'}));
  app.use(urlencoded({ extended: true, limit: '50mb'}))
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3003);
}
bootstrap();
