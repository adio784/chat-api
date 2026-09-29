import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json()); 
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:4200',
    ],
  });
  app.use((req, res, next) => {
    console.log('req.body:', req.body); 
    next();
  });
  await app.listen(8000);
}
bootstrap();
