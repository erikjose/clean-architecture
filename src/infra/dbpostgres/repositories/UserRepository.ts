import { PgRepository } from "./Repository";
import { PgUser } from '../entities'
import { SaveUser } from "@/presentation/protocols/ISaveUser"

export class UserRepository extends PgRepository {
  async save (data: SaveUser.Input): Promise<SaveUser.Output> {
    const userRepository = this.getRepository(PgUser)

    const { name, email, initials, id } = await userRepository.save(data)

    return {
      id,
      name,
      email,
      initials
    }
  }

  async findById (id: number): Promise<any> {
    const userRepository = this.getRepository(PgUser)

    const userOrFail = await userRepository.findOne({ where: { id }, relations: ['profile'] })

    return userOrFail
  }
}
