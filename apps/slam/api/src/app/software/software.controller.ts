/** @format */

import { Controller, Get } from '@nestjs/common';
import { SoftwareService } from './software.service';

@Controller('software')
export class SoftwareController {
  constructor(private readonly softwareService: SoftwareService) {}

  @Get()
  getSoftwareTitles() {
    return this.softwareService.getSoftware();
  }
}
