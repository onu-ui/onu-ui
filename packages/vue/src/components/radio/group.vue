<script setup lang="ts">
import Radio from './index.vue'
import { radioGroupProps } from './props'

defineOptions({
  name: 'RadioGroup',
})

defineProps(radioGroupProps)

const model = defineModel<string | number | boolean>()
</script>

<template>
  <div
    class="flex gap-2"
    :class="direction === 'vertical' ? 'flex-col items-start' : 'flex-row items-center flex-wrap'"
    role="radiogroup"
  >
    <Radio
      v-for="item in options"
      :key="`${typeof item.value}:${String(item.value)}`"
      v-model="model"
      :value="item.value"
      :shape="shape"
      :size="size"
      :name="name"
      :disabled="disabled || item.disabled"
    >
      {{ item.label ?? item.value }}
    </Radio>
  </div>
</template>
