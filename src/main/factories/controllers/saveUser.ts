import { Controller } from "@/presentation/protocols/Controller"
import { CreateUserRepository } from "@/presentation/controllers/CreateUserRepository"
import { makeSaveUserCase } from "../usecases/saveUserCase"

export const makeSavePictureController = (): Controller => {
  const controller = new CreateUserRepository(makeSaveUserCase())
  return controller
}
