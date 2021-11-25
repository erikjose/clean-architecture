import { SaveUserCoisa, SetupSaveUserCase } from "@/usecases/SaveUser"
import { makePgUserAccountRepo } from "../infra/UserRepository"

export const makeSaveUserCase = (): SaveUserCoisa => {
  return SetupSaveUserCase(
    makePgUserAccountRepo()
  )
}
