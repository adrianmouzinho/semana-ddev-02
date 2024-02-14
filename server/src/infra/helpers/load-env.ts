import { resolve } from 'node:path'
import * as dotenv from 'dotenv'

export class LoadEnv {
  static load() {
    if (!process.env.NODE_ENV) {
      throw new Error('NODE_ENV is not defined.')
    }

    try {
      const fileName =
        process.env.NODE_ENV !== 'production' ? 'development' : 'production'

      dotenv.config({
        path: resolve(__dirname, '..', '..', '..', `.env.${fileName}`),
      })
    } catch (error) {
      throw new Error('Erro loading .env file.')
    }
  }
}
