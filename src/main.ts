import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Enable CORS for frontend
  app.enableCors();

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('Real Estate Platform API')
    .setDescription(
      'API for managing real estate developers, projects, apartments, and leads',
    )
    .setVersion('1.0')
    .addTag('developers', 'Developer management endpoints')
    .addTag('projects', 'Project management endpoints')
    .addTag('apartments', 'Apartment management endpoints')
    .addTag('leads', 'Lead management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3002);
  console.log('Application is running on: http://localhost:3002');
}
bootstrap();
