
<script lang="ts" setup name="O-Switch">
import { parseColor } from '@onu-ui/preset'
import { switchProps } from './props'

const props = defineProps(switchProps)

const emits = defineEmits(['update:modelValue', 'change'])

const mv = useVModel(props, 'modelValue', emits)

const style: Record<string, string | undefined> = {
  '--o-switch-dot': props.light ? 'rgb(var(--onu-c-context))' : '#fff',
  '--o-switch-c': 'rgb(var(--onu-c-context))',
  '--o-switch-bc': props.light ? 'rgb(var(--onu-c-context))' : props.backgroundColor,
}
// if (props.light) {
//   // Invert colors
//   const color = parseColor(props.backgroundColor, {})
//   if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
//     style['--onu-c-context'] = `${color.cssColor.components.join(',')}`
// }
</script>

<template>
  <input
    v-model="mv"
    :style="style"
    type="checkbox"
    class="o-switch"
    :class="[`o-switch-${size}`, disabled && 'o-switch-disabled']"
    checked
    :disabled="disabled"
  >
</template>
