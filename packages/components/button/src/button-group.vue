<script setup lang="ts">
import { buttonGroupProps } from './props'
import { buttonGroupContextKey } from './constants'

defineOptions({
  name: 'OButtonGroup',
})
const props = defineProps(buttonGroupProps)
defineSlots<{
  default(props: unknown): any
}>()

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  }),
)
</script>

<template>
  <div class="o-button-group o-button-group-clearfix inline-block align-middle o-button-group-children" :class="[spacer && 'spacer']">
    <slot />
  </div>
</template>

<style scope>
.o-button-group > .o-button-base + .o-button-base {
  margin-left: 0;
}
.o-button-group > .o-button-base:first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.o-button-group > .o-button-base:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.o-button-group > .o-button-base:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.o-button-group > .o-button-base:not(:last-child) {
  /* margin-right: -1px; */
  border-right: none;
}
.o-button-group.spacer > .o-button-base:not(:first-child) {
  border-left-color: white;
}
.o-button-group > .o-button-base:hover, .o-button-group > .o-button-base:focus, .o-button-group > .o-button-base:active {
  z-index: 1;
}
</style>
