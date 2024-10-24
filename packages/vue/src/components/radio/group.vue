<script lang='ts' setup>
import ORadio from './index.vue'
import { radioGroupProps } from './props'

defineOptions({
  name: 'ORadioGroup',
})

defineProps(radioGroupProps)

const model = defineModel()
</script>

<template>
  <div flex="~ gap-2">
    <ORadio
      v-for="(item, idx) in options"
      :key="`${item.value}-${idx}`"
      v-model="model as any"
      :value="item.value"
      :shape="shape"
      :size="size"
      :name="name"
    />
  </div>
</template>
