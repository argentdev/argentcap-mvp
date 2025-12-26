import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for frontend communication
  app.setGlobalPrefix('api'); // Set global prefix to /api
  await app.listen(process.env.PORT ?? 3001); // Use port 3001 to avoid conflict with Next.js
}
bootstrap();
