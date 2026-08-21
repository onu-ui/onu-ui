<script setup lang="ts">
defineOptions({ name: 'Slider' })

withDefaults(defineProps<{
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  name?: string
}>(), {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
})

const model = defineModel<number>({ default: 0 })
</script>

<template>
  <input
    v-model.number="model"
    class="w-full accent-primary disabled:cursor-not-allowed disabled:opacity-50"
    type="range"
    :min
    :max
    :step
    :name
    :disabled
    :aria-valuetext="String(model)"
  >
</template>
