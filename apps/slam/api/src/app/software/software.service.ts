/** @format */

import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Software } from './software.model';

@Injectable()
export class SoftwareService {
  constructor(@Inject('SOFTWARE_REPOSITORY') private softwareRepository: Repository<Software>) {}

  getAllSoftware() {
    return this.softwareRepository.find();
  }
}
