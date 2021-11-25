import {
  createConnection,
  getConnection,
  getConnectionManager,
  ObjectType,
  QueryRunner,
  Repository,
  Connection,
  getRepository
} from 'typeorm'

export class PgConnection {
  private static instance?: PgConnection
  private query?: QueryRunner
  private connection?: Connection

  private constructor () {}

  static getInstance (): PgConnection {
    if (PgConnection.instance === undefined) PgConnection.instance = new PgConnection()
    return PgConnection.instance
  }

  async connect (): Promise<void> {
    this.connection = getConnectionManager().has('default')
      ? getConnection()
      : await createConnection()
  }

  async disconnect (): Promise<void> {
    await getConnection().close()
    this.query = undefined
    this.connection = undefined
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.query !== undefined) return this.query.manager.getRepository(entity)
    return getRepository(entity)
  }
}
