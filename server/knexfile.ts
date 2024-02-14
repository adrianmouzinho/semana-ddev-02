import type { Knex } from 'knex'
import 'dotenv/config'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
    },
  },
}

export default config
