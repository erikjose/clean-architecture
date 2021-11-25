import { UserRepository } from '@/infra/dbpostgres/repositories/UserRepository'

export const makePgUserAccountRepo = (): UserRepository => {
  return new UserRepository()
}
