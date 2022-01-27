/** @format */

import { Test, TestingModule } from '@nestjs/testing';
import { SoftwareController } from './software.controller';

xdescribe('SoftwareController', () => {
  let controller: SoftwareController;

  const softwareTitleService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftwareController],
    }).compile();

    controller = module.get<SoftwareController>(SoftwareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
