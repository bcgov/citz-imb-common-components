/** @format */

import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "General Kenobi!!"', () => {
      expect(service.getData()).toEqual({ message: 'General Kenobi!!' });
    });
  });
});
