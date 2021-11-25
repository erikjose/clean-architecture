const IS_DEV = process.env.NODE_ENV !== 'development'

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    `${IS_DEV ? 'dist' : 'src'}/infra/dbpostgres/entities/index.{js,ts}`
  ],
  migrations: [
    `${IS_DEV ? 'dist' : 'src'}/infra/dbpostgres/migrations/*`
  ]
}
