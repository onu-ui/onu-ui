<script lang='ts' setup>
import type { ORadioProps } from './props'
import { computed, ref } from 'vue'
import { radioProps } from './props'

defineOptions({
  name: 'ORadio',
})

const props = defineProps(radioProps)
const emits = defineEmits<{
  change: [value: unknown]
}>()
const model = defineModel()

const hashId = ref(Math.random().toString(36).substring(7))
const isChecked = computed(() => model.value === props.value)

const sizeMap: Record<ORadioProps['size'], string> = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
}
const shapeMap: Record<ORadioProps['shape'], string> = {
  circle: 'radio-circle',
  square: 'radio-square',
}

const sizes = computed(() => sizeMap[props.size])
const shapes = computed(() => shapeMap[props.shape])

function handleChange(e: Event) {
  const { dataset: { type }, value } = e.target as HTMLInputElement & { dataset: { type: 'number' | 'string' | 'boolean' } }
  let _val

  if (type === 'number') {
    _val = Number(value)
  }
  else if (type === 'boolean') {
    _val = value === 'true'
  }
  else {
    _val = value
  }
  model.value = _val
  emits('change', _val)
}
</script>

<template>
  <label
    class="radio radio-theme-400" :class="[
      sizes,
      shapes,
    ]" :for="hashId"
  >
    <input
      :id="hashId"
      :name="name"
      :data-type="typeof value"
      :disabled="disabled"
      :value="value"
      :checked="isChecked"
      type="radio"
      class="peer"
      @change="handleChange"
    >
    <span class="radio-dot" />
  </label>
</template>
