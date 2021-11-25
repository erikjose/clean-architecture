import { addAlias } from 'module-alias'
import { resolve } from 'path'

const IS_DEV = process.env.NODE_ENV !== 'development'
addAlias('@', resolve(IS_DEV ? 'dist' : 'src'))
