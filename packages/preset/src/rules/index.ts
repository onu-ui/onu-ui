import type { Rule } from 'unocss'
import type { Theme } from '@unocss/preset-mini'

import { masks } from './mask'
import { contexts } from './context'

export const rules: Rule<Theme>[] = [
  contexts,
  masks,
].flat()
