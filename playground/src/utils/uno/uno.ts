import { createGenerator } from 'unocss'
import type { UserConfig } from 'unocss'
import defaultConfigRaw from '../../../uno.config.ts?raw'
import { evaluateUserConfig } from './evaluate-user-config'

const defaultConfig = ref<UserConfig | undefined>()

async function load() {
  try {
    defaultConfig.value = await evaluateUserConfig(defaultConfigRaw)
  }
  catch (e) {
    console.error(e)
  }
}
await load()
const uno = createGenerator({}, defaultConfig.value)

export async function generate(html: string, cb: (result: string) => void | Promise<void>) {
  const output = await uno.generate(html || '')
  cb(output.css)
}
