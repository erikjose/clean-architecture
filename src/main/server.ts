import './config/aliases'
import { PgConnection } from '@/infra/dbpostgres/helpers/connection'

PgConnection.getInstance().connect()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(3333, () => {
      console.log('Server is running at http://localhost:3333')
    })
  })
  .catch(err => {
    console.log(err)
  })
