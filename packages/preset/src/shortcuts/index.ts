import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts } from 'unocss'
import { baseShortcuts } from './base'
import { commonShortcuts } from './common'
import { alertShortcuts } from './alert'
import { avatarDynamicShortcuts, avatarShortcuts } from './avatar'
import { badgeShortcuts } from './badge'
import { buttonShortcuts } from './button'
import { buttonGroupShortcuts } from './button-group'
import { cardShortcuts } from './card'
import { checkboxShortcuts } from './checkbox'
import { collapseShortcuts } from './collapse'
import { iconShortcuts } from './icon'
import { messageDynamicShortcuts, messageShortcuts } from './message'
import { switchShortcuts } from './switch'
import { tagShortcuts } from './tag'
import { popupShortcuts } from './popup'
import { triggerShortcuts } from './trigger'
import { rateShortcuts } from './rate'
import { emptyShortcuts } from './empty'
import { linkShortcuts } from './link'
import { radioShortcuts } from './radio'
import { progressShortcuts } from './progress'

export default [
  baseShortcuts,
  commonShortcuts,
  // alert
  alertShortcuts,
  // avatar
  avatarShortcuts,
  ...avatarDynamicShortcuts,
  // badge
  badgeShortcuts,
  // button
  buttonShortcuts,
  buttonGroupShortcuts,
  // card
  cardShortcuts,
  // checkbox
  checkboxShortcuts,
  // collapse
  collapseShortcuts,
  // icon
  iconShortcuts,
  // message
  messageShortcuts,
  ...messageDynamicShortcuts,
  // switch
  switchShortcuts,
  // tag
  tagShortcuts,
  // popup
  popupShortcuts,
  // trigger
  triggerShortcuts,
  // rate
  rateShortcuts,
  // empty
  emptyShortcuts,
  // link
  linkShortcuts,
  // radio
  radioShortcuts,
  // progress
  progressShortcuts,
] as UserShortcuts<Theme>
