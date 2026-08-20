import type { Plugin } from 'vue'
import { OAlert } from './alert'
import { OAvatar, OAvatarGroup } from './avatar'
import { OBadge } from './badge'
import { OButton, OButtonGroup } from './button'
import { OCard } from './card'
import { OCheckbox } from './checkbox'
import { OEmpty } from './empty'
import { OInput } from './input'
import { OKbd } from './kbd'
import { ORadio, ORadioGroup } from './radio'
import { OSeparator } from './separator'
import { OSkeleton } from './skeleton'
import { OSpinner } from './spinner'
import { OSwitch } from './switch'

export default [
  OAlert,
  OAvatar,
  OAvatarGroup,
  OBadge,
  OButton,
  OButtonGroup,
  OCard,
  OCheckbox,
  OEmpty,
  OInput,
  OKbd,
  ORadio,
  ORadioGroup,
  OSeparator,
  OSkeleton,
  OSpinner,
  OSwitch,
] as unknown as Plugin[]

export * from './alert'
export * from './avatar'
export * from './badge'
export * from './button'
export * from './card'
export * from './checkbox'
export * from './empty'
export * from './input'
export * from './kbd'
export * from './radio'
export * from './separator'
export * from './skeleton'
export * from './spinner'
export * from './switch'
