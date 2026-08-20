import type { CustomShortcut } from '../types'
import { alerts } from './alert'
import { aspectRatios } from './aspect-ratio'
import { avatar } from './avatar'
import { badge } from './badge'
import { breadcrumbs } from './breadcrumb'
import { button } from './button'
import { cards } from './card'
import { checkboxs } from './checkbox'
import { defaults } from './defaults'
import { empty } from './empty'
import { fields } from './field'
import { input } from './input'
import { inputGroups } from './input-group'
import { items } from './item'
import { kbd } from './kbd'
import { labels } from './label'
import { nativeSelects } from './native-select'
import { paginations } from './pagination'
import { progresses } from './progress'
import { radio } from './radio'
import { separators } from './separator'
import { skeletons } from './skeleton'
import { spinners } from './spinner'
import { switches } from './switch'
import { tables } from './table'
import { textareas } from './textarea'
import { toggles } from './toggle'
import { typography } from './typography'

export const shortcuts: CustomShortcut[] = [
  alerts,
  aspectRatios,
  avatar,
  badge,
  breadcrumbs,
  button,
  cards,
  checkboxs,
  defaults,
  empty,
  fields,
  input,
  inputGroups,
  items,
  kbd,
  labels,
  nativeSelects,
  paginations,
  progresses,
  radio,
  separators,
  skeletons,
  spinners,
  switches,
  tables,
  textareas,
  toggles,
  typography,
].flat()
