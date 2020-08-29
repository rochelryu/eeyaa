import { EtatService } from './services/etat.service';
import { EtatController } from './controllers/etat.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EtatController],
  providers: [EtatService],
})
export class EtatModule {}
