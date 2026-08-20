import { withInstall } from '../../utils'
import Dialog from './index.vue'

const AlertDialog = { ...Dialog, name: 'OAlertDialog' } as typeof Dialog

export const ODialog = withInstall(Dialog, { AlertDialog })
export const OAlertDialog = AlertDialog
export default ODialog
