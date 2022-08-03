import { startCli } from './cli'
import { handleError } from './error'

startCli().catch(handleError)
