<script lang="ts" setup name="OSwitch">
import type { Ref } from 'vue'
import { switchProps } from './props'

const props = defineProps(switchProps)

const emits = defineEmits(['update:modelValue', 'change'])

const mv = useVModel(props, 'modelValue', emits) as unknown as Ref<boolean>

const style: Record<string, string | undefined> = {
  '--o-switch-dot': props.light ? props.backgroundColor : '#fff', // dot
  '--o-switch-dot-active': props.light ? 'rgb(var(--onu-c-context))' : '#fff', // dot-active
  '--o-switch-c': props.light ? '#fff' : 'rgb(var(--onu-c-context))', // shadow
  '--o-switch-bc': props.light ? '#fff' : props.backgroundColor, // bg
}
</script>

<template>
  <!-- Maybe this is not a good implementation, try to refactor it -->
  <input
    v-model="mv"
    :style="style"
    type="checkbox"
    class="o-switch"
    :class="[`o-switch-${size}`, disabled && 'o-switch-disabled']"
    :disabled="disabled"
  >
</template>
