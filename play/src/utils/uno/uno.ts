import { createGenerator } from 'unocss'
import defaultConfigRaw from '../../../unocss.config.ts?raw'
import { evaluateUserConfig } from './evaluate-user-config'
import type { UserConfig } from 'unocss'

const defaultConfig = ref<UserConfig | undefined>()

async function load() {
  try {
    defaultConfig.value = await evaluateUserConfig(defaultConfigRaw)
  } catch (e) {
    console.error(e)
  }
}
await load()
const uno = createGenerator({}, defaultConfig.value)

export async function generate(html: string, cb: Function) {
  const output = await uno.generate(html || '')
  cb(output.css)
}
