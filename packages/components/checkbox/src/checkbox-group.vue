<script lang="ts" setup name="OCheckboxGroup">
import type { OCheckboxGroupProps } from './checkbox-group'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
import { checkboxGroupContextKey } from './constants'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

function changeEvent(value: OCheckboxGroupProps['modelValue']) {
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}

provide(
  checkboxGroupContextKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
)
</script>

<template>
  <div class="inline-flex items-center flex-wrap text-0px" role="checkboxgroup">
    <slot />
  </div>
</template>
