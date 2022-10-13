import { resolve } from 'path'
import fse from 'fs-extra'

const componentsDir = resolve(__dirname, '../packages/components', 'dist')
const targetDir = resolve(__dirname, '../packages/onu-ui', 'es/components')

const main = async() => {
  try {
    await fse.ensureDir(componentsDir)
    fse.copySync(componentsDir, targetDir, { overwrite: true })
  } catch (error) {

  }
}

main()
