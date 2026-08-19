import type { CustomShortcut } from '../types'
import { alerts } from './alert'
import { avatar } from './avatar'
import { badge } from './badge'
import { button } from './button'
import { cards } from './card'
import { checkboxs } from './checkbox'
import { defaults } from './defaults'
import { empty } from './empty'
import { input } from './input'
import { kbd } from './kbd'
import { radio } from './radio'
import { separators } from './separator'
import { skeletons } from './skeleton'
import { spinners } from './spinner'
import { switches } from './switch'

export const shortcuts: CustomShortcut[] = [
  alerts,
  avatar,
  badge,
  button,
  cards,
  checkboxs,
  defaults,
  empty,
  input,
  kbd,
  radio,
  separators,
  skeletons,
  spinners,
  switches,
].flat()
