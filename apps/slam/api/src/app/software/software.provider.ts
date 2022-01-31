/** @format */

import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Software } from './software.entity';

export const softwareProvider: Provider[] = [
  {
    provide: 'SOFTWARE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Software),
    inject: ['DATABASE_CONNECTION'],
  },
];
