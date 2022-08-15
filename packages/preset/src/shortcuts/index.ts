import { shortcutCommon } from './common'
import { shortcutGeneral } from './general'
import { shortcutAvatar } from './avatar'
import { buttonDynamic, shortcutButton } from './button'
import { shortcutCard } from './card'
import type { UserShortcuts } from 'unocss'

export default [
  shortcutCommon,
  shortcutGeneral,
  shortcutAvatar,
  shortcutButton,
  ...buttonDynamic,
  shortcutCard,
] as UserShortcuts<{}>
