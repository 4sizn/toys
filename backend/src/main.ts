import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load the environment variables
  console.log(`The connection URL is ${process.env.DATABASE_URL}`);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
