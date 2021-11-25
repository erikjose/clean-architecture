import { adaptExpressRoute as adapt } from '@/main/adapters/express'
import { makeSavePictureController } from '@/main/factories/controllers/saveUser'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/users', adapt(makeSavePictureController()))
}
