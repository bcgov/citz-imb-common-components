/** @format */

import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SoftwareController } from './software.controller';
import { softwareProvider } from './software.provider';
import { SoftwareService } from './software.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SoftwareController],
  providers: [SoftwareService, ...softwareProvider],
})
export class SoftwareModule {}
