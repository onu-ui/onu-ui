import { resolve } from 'node:path'
import fs from 'fs-extra'

const componentsDir = resolve(__dirname, '../packages/components', 'dist')
// eslint-disable-next-line n/prefer-global/process
const volarPath = resolve(process.cwd(), 'volar.d.ts')
const targetDir = resolve(__dirname, '../packages/onu-ui', 'es/components')
const volarTargetPath = resolve(__dirname, '../packages/onu-ui', 'volar.d.ts')

async function run() {
  try {
    await fs.ensureDir(componentsDir)
    await fs.ensureFile(volarPath)
    fs.copySync(componentsDir, targetDir, { overwrite: true })
    fs.copyFileSync(volarPath, volarTargetPath)
  }
  catch (error) {
    console.error(error)
  }
}

run()
