import type { Theme } from '@unocss/preset-uno'
import type { UserShortcuts } from 'unocss'
import { baseShortcuts } from './base'
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

export const shortcuts = [
  // btn
  ['btn', 'inline-flex shrink-0 text-teal'],
] as UserShortcuts<Theme>
