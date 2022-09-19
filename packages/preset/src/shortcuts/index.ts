
import { baseShortcuts } from './base'
import { commonShortcuts } from './common'
import { alertShortcuts } from './alert'
import { avatorDynamicShortcuts, avatorShortcuts } from './avator'
import { badgeShortcuts } from './badge'
import { buttonShortcuts } from './button'
import { cardShortcuts } from './card'
import { checkboxShortcuts } from './checkbox'
import { iconShortcuts } from './icon'
import { messageDynamicShortcuts, messageShortcuts } from './message'
import { switchShortcuts } from './switch'
import { tagShortcuts } from './tag'
import { rateShortcuts } from './rate'

import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts } from 'unocss'

export default [
  baseShortcuts,
  commonShortcuts,
  // alert
  alertShortcuts,
  // avatar
  avatorShortcuts,
  ...avatorDynamicShortcuts,
  // badge
  badgeShortcuts,
  // button
  buttonShortcuts,
  // card
  cardShortcuts,
  // checkbox
  checkboxShortcuts,
  // icon
  iconShortcuts,
  // message
  messageShortcuts,
  ...messageDynamicShortcuts,
  // switch
  switchShortcuts,
  // tag
  tagShortcuts,
  // rate
  rateShortcuts,
] as UserShortcuts<Theme>
