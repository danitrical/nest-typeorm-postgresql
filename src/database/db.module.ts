import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASECONFIG } from '../config/config';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASECONFIG)],
})
export class DatabaseModule {}
