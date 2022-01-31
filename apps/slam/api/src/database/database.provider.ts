/** @format */

import { createConnection } from 'typeorm';
import { Software } from '../app/software/software.entity';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [Software],
        synchronize: process.env.POSTGRES_SYNCRONIZE == 'true',
      }),
  },
];
