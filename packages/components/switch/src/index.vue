
<script lang="ts" setup name="O-Switch">
import { switchProps } from './props'

const props = defineProps(switchProps)

const emits = defineEmits(['update:modelValue', 'change'])

const mv = useVModel(props, 'modelValue', emits)

const style: Record<string, string> = {
  '--o-switch-bc': props.light ? 'rgb(var(--onu-c-context))' : props.backgroundColor,
}
if (props.light)
  style['--onu-c-context'] = props.backgroundColor
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

<style scoped>
.toggle {
  flex-shrink: 0;
  --bc: 220 13% 69%;
  --handleoffset: 1.5rem;
  --tw-border-opacity: .2;
  --tw-bg-opacity: .2;
  --b1: 220 18% 20%;
  --b2: 220 17% 17%;

  height: 1.5rem;
  width: 3rem;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-width: 1px;
  border-color: hsl(var(--bc)/var(--tw-border-opacity));
  background-color: hsl(var(--bc)/var(--tw-bg-opacity));
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  border-radius: var(--rounded-badge, 1.9rem);
  transition: background, box-shadow .2s ease-in-out;
  box-shadow: calc(var(--handleoffset) * -1) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}

.toggle:checked,
.toggle[checked=true],
.toggle[aria-checked=true] {
  --chkbg: hsl(var(--bc));
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  box-shadow: var(--handleoffset) 0 0 2px hsl(var(--b1)) inset, 0 0 0 2px hsl(var(--b1)) inset;
}
</style>
