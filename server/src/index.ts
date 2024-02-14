import { LoadEnv } from '@infra/helpers/load-env'

LoadEnv.load()

console.log(process.env.DATABASE_URL)
