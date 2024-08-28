import type { CustomRule } from '../types'
import { masks } from './mask'
import { contexts } from './context'

export const rules: CustomRule[] = [
  contexts,
  masks,
].flat()
