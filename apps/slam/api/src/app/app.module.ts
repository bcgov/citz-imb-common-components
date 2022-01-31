/** @format */

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareController } from './software/software.controller';
import { SoftwareModule } from './software/software.module';
import { softwareProvider } from './software/software.provider';
import { SoftwareService } from './software/software.service';

@Module({
  imports: [SoftwareModule, DatabaseModule],
  controllers: [AppController, SoftwareController],
  providers: [AppService, SoftwareService, ...softwareProvider],
})
export class AppModule {}
