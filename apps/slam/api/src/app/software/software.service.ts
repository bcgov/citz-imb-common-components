/** @format */

import { Injectable } from '@nestjs/common';
import { Software } from './software.model';

@Injectable()
export class SoftwareService {
  private software: Software[] = [];

  getSoftware() {
    return [...this.software];
  }
}
