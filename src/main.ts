import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger("Main Info");
  await app.listen(process.env.APP_PORT, () => logger.debug(`${process.env.APP_HOST}:${process.env.APP_PORT} application running`));
}
bootstrap();
