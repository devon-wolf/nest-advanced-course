import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { COFFEES_DATA_SOURCE } from './constants/constants';

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, { provide: COFFEES_DATA_SOURCE, useValue: [] }],
})
export class CoffeesModule {}
