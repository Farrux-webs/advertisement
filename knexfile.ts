import 'dotenv/config';
import type { Knex } from 'knex';

const { DB_PORT, DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      connectionString: `${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
      // mysql://user:password@hostname:port/database
      filename: 'knex_migrations',
    },
    migrations: {
      directory: './database/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export default config;
