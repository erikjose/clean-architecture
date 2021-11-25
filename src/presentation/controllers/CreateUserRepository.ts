import { SaveUserCoisa } from "@/usecases/SaveUser";
import { HttpRequest, HttpResponse, ok, serverError } from "../helpers";
import { Controller } from "../protocols/Controller";

export class CreateUserRepository extends Controller {
  constructor (
    private readonly saveUser: SaveUserCoisa
  ) { super() }

  override async perform (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.saveUser(httpRequest.body)

      return ok(user)
    } catch(err) {
      return serverError(err)
    }
  }
}
