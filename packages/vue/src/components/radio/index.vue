<script setup lang="ts">
import type { ORadioProps } from './props'
import { computed, useAttrs, useId } from 'vue'
import { radioProps } from './props'

defineOptions({
  name: 'ORadio',
  inheritAttrs: false,
})

const props = defineProps(radioProps)
const emits = defineEmits<{
  change: [value: unknown]
}>()
const model = defineModel<string | number | boolean>()

const inputId = useId()
const attrs = useAttrs()
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

const classes = computed(() => [sizeMap[props.size], shapeMap[props.shape]])

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

function forwardedAttrs() {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
}
</script>

<template>
  <label class="inline-flex items-center gap-2 cursor-pointer" :class="attrs.class" :style="attrs.style" :for="inputId">
    <span class="radio radio-theme-400" :class="classes">
      <input
        v-bind="forwardedAttrs()"
        :id="inputId"
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
    </span>
    <span v-if="$slots.default"><slot /></span>
  </label>
</template>
