import { IMemoryDb, newDb } from 'pg-mem'
import { PgConnection } from '../helpers/connection'

export const makeFakeDbMemory = async (entities?: any[]): Promise<IMemoryDb> => {
  const db = newDb({ autoCreateForeignKeyIndices: true })
  db.public.registerFunction({
    implementation: () => 'test',
    name: 'current_database'
  })
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: entities ?? ['src/infra/dbpostgres/entities/index.ts']
  })
  // lets create your tables
  await connection.synchronize()
  await PgConnection.getInstance().connect()
  return db
}
