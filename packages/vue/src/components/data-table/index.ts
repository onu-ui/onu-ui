import { withInstall } from '../../utils'
import DataTable from './index.vue'

export const ODataTable = withInstall(DataTable)
export default ODataTable
export type { DataTableColumn } from './types'
