import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InternalServerErrorException, ValidationPipe } from '@nestjs/common';
import { APP_PORT } from './utils/config';

async function bootstrap() {
  // 
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  
  app.setGlobalPrefix('/api/v1/');

 app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  try {
    await app.listen(APP_PORT || 3000);
  } catch (error) {
    console.log(error);
    throw new InternalServerErrorException(error);
  }
}
bootstrap();
