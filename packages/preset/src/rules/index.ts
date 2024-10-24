import type { CustomRule } from '../types'
import { contexts } from './context'
import { masks } from './mask'

export const rules: CustomRule[] = [
  contexts,
  masks,
].flat()
