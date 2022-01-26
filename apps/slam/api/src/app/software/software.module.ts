/** @format */

import { Module } from '@nestjs/common';
import { SoftwareController } from './software.controller';
import { SoftwareService } from './software.service';

@Module({
  controllers: [SoftwareController],
  providers: [SoftwareService],
})
export class SoftwareModule {}
