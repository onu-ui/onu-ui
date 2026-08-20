<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import OCalendar from '../calendar/index.vue'
import OPopover from '../popover/index.vue'

defineOptions({ name: 'ODatePicker' })

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
  <OPopover v-model="open" align="start">
    <template #trigger>
      <button class="input min-w-56 justify-between text-left" type="button" :aria-expanded="open" @click="open = !open">
        <span :class="!model && 'text-muted-foreground'">{{ label }}</span><span aria-hidden="true">▣</span>
      </button>
    </template>
    <OCalendar v-model="model" class="border-0 p-0" :locale :min :max @update:model-value="open = false" />
  </OPopover>
</template>
