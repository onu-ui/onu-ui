<script setup lang="ts">
import { computed, shallowRef } from 'vue'

interface CalendarDay {
  date: Date
  value: string
  day: number
}

defineOptions({ name: 'Calendar' })

const props = withDefaults(defineProps<{
  min?: string
  max?: string
  locale?: string
  disabledDates?: string[]
}>(), {
  locale: 'en-US',
  disabledDates: () => [],
})

const model = defineModel<string>({ default: '' })
const initial = model.value ? new Date(`${model.value}T00:00:00`) : new Date()
const visibleMonth = shallowRef(new Date(initial.getFullYear(), initial.getMonth(), 1))
const formatter = computed(() => new Intl.DateTimeFormat(props.locale, { month: 'long', year: 'numeric' }))
const weekdayFormatter = computed(() => new Intl.DateTimeFormat(props.locale, { weekday: 'short' }))
const weekdays = computed(() => Array.from({ length: 7 }, (_, index) => weekdayFormatter.value.format(new Date(2024, 0, 7 + index))))

const days = computed<Array<CalendarDay | null>>(() => {
  const year = visibleMonth.value.getFullYear()
  const month = visibleMonth.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  return [
    ...Array<null>(firstDay).fill(null),
    ...Array.from({ length: total }, (_, index) => {
      const date = new Date(year, month, index + 1)
      const value = `${year}-${String(month + 1).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`
      return { date, value, day: index + 1 }
    }),
  ]
})

function isDisabled(value: string) {
  return Boolean((props.min && value < props.min) || (props.max && value > props.max) || props.disabledDates.includes(value))
}

function moveMonth(offset: number) {
  visibleMonth.value = new Date(visibleMonth.value.getFullYear(), visibleMonth.value.getMonth() + offset, 1)
}
</script>

<template>
  <div class="w-72 rounded-lg border border-border bg-background p-3" aria-label="Calendar">
    <header class="mb-3 flex items-center justify-between">
      <button class="btn btn-ghost btn-sm" type="button" aria-label="Previous month" @click="moveMonth(-1)">
        ‹
      </button>
      <strong class="text-sm">{{ formatter.format(visibleMonth) }}</strong>
      <button class="btn btn-ghost btn-sm" type="button" aria-label="Next month" @click="moveMonth(1)">
        ›
      </button>
    </header>
    <div class="grid grid-cols-7 text-center text-xs text-muted-foreground">
      <span v-for="weekday in weekdays" :key="weekday" class="py-1">{{ weekday }}</span>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <span v-for="(entry, index) in days" :key="entry?.value ?? `empty-${index}`">
        <button
          v-if="entry"
          class="aspect-square w-full rounded-md text-sm hover:bg-muted disabled:opacity-35"
          :class="entry.value === model && 'bg-primary text-primary-foreground hover:bg-primary'"
          type="button"
          :disabled="isDisabled(entry.value)"
          :aria-pressed="entry.value === model"
          :aria-label="entry.date.toLocaleDateString(locale)"
          @click="model = entry.value"
        >{{ entry.day }}</button>
      </span>
    </div>
  </div>
</template>
