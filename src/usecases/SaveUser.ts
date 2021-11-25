import { SaveUser } from "@/presentation/protocols/ISaveUser"
import { UserRepository } from "@/infra/dbpostgres/repositories/UserRepository"

type Setup = (userProfileRepo: UserRepository) => SaveUserCoisa
export type SaveUserCoisa = (data: SaveUser.Input) => Promise<SaveUser.Output>

export const SetupSaveUserCase: Setup = (userProfileRepo) => async ({ email, initials, name }) => {
  const userOrFail = userProfileRepo.save({
    name,
    initials,
    email
  })

  return userOrFail
}
