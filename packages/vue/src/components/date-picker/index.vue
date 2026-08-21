<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import Calendar from '../calendar/index.vue'
import Popover from '../popover/index.vue'

defineOptions({ name: 'DatePicker' })

const props = withDefaults(defineProps<{
  placeholder?: string
  locale?: string
  min?: string
  max?: string
}>(), {
  placeholder: 'Pick a date',
  locale: 'en-US',
})

const model = defineModel<string>({ default: '' })
const open = shallowRef(false)
const label = computed(() => model.value ? new Intl.DateTimeFormat(props.locale, { dateStyle: 'medium' }).format(new Date(`${model.value}T00:00:00`)) : props.placeholder)
</script>

<template>
  <Popover v-model="open" align="start">
    <template #trigger>
      <button class="input min-w-56 justify-between text-left" type="button" :aria-expanded="open" @click="open = !open">
        <span :class="!model && 'text-muted-foreground'">{{ label }}</span><span aria-hidden="true">▣</span>
      </button>
    </template>
    <Calendar v-model="model" class="border-0 p-0" :locale :min :max @update:model-value="open = false" />
  </Popover>
</template>
