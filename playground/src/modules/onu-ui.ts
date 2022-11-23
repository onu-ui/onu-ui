import OnuUI, { zhCn } from 'onu-ui'
import type { UserModule } from '../types'

export const install: UserModule = app => app.use(OnuUI, {
  locale: zhCn,
})
