import knex from 'knex';
import knexfile from '../../../knexfile';

export const databaseProvider = {
  provide: 'KnexConnection',
  useFactory: async () => {
    const knexConfig = knexfile;
    return knex(knexConfig[process.env.NODE_ENV]);
  },
};