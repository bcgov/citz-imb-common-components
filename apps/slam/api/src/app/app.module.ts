/** @format */

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoftwareController } from './software/software.controller';
import { SoftwareModule } from './software/software.module';
import { SoftwareService } from './software/software.service';

@Module({
  imports: [SoftwareModule],
  controllers: [AppController, SoftwareController],
  providers: [AppService, SoftwareService],
})
export class AppModule {}
