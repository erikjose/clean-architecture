import { IBackup } from 'pg-mem'
import { Repository } from 'typeorm'
import { UserRepository } from '../UserRepository'
import { PgProfile, PgUser } from '@/infra/dbpostgres/entities'
import { PgConnection } from '@/infra/dbpostgres/helpers/connection'
import { makeFakeDbMemory } from '@/infra/dbpostgres/mocks/connectionPgMemory'

const makeSut = (): UserRepository => new UserRepository()

describe('User repository', () => {
  let connection: PgConnection
  let pgUserRepo: Repository<PgUser>
  let backup: IBackup

  beforeAll(async () => {
    connection = PgConnection.getInstance()
    const db = await makeFakeDbMemory([PgUser, PgProfile])
    backup = db.backup()
    pgUserRepo = connection.getRepository(PgUser)
  })

  afterAll(async () => {
    await connection.disconnect()
  })

  beforeEach(() => {
    backup.restore()
  })

  describe('find by id', () => {
    test('Should return a user account', async () => {
      const sut = makeSut()
      const userFake = await pgUserRepo.save({
        email: 'any_email',
        name: 'any_name',
        initials: 'any_initials',
        profile: {
          document: '07871641603'
        }
      })
      const response = await sut.findById(userFake.id)
      expect(response).toBeDefined()
      expect(response.id).toBeTruthy()
      expect(response.name).toBe('any_name')
      expect(response.email).toBe('any_email')
      expect(response.initials).toBe('any_initials')
      expect(response.profile.document).toBe('07871641603')
    })
  })
})
