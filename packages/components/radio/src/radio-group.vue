<script setup lang="ts" name="ORadioGroup">
import { radioGroupKey } from './constants'
import type { ORadioGroupProps } from './radio-group'
import { radioGroupEmits, radioGroupProps } from './radio-group'

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)
const radioGroupRef = ref<HTMLDivElement>()

function changeEvent(value: ORadioGroupProps['modelValue']) {
  emit('update:modelValue', value)
  nextTick(() => emit('change', value))
}

provide(
  radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
)

onMounted(() => {
  const radios = radioGroupRef.value!.querySelectorAll<HTMLInputElement>('[type=radio]')
  const firstLabel = radios[0]
  if (!Array.from(radios).some(radio => radio.checked) && firstLabel)
    firstLabel.tabIndex = 0
})
</script>

<template>
  <div
    ref="radioGroupRef"
    class="inline-flex items-center flex-wrap text-0px"
    role="radiogroup"
  >
    <slot />
  </div>
</template>

<style scoped>
</style>
