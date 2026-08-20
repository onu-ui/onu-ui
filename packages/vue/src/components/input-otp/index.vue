<script setup lang="ts">
import { computed, nextTick, useTemplateRef } from 'vue'

defineOptions({ name: 'OInputOtp' })

const props = withDefaults(defineProps<{
  length?: number
  disabled?: boolean
  name?: string
  ariaLabel?: string
}>(), {
  length: 6,
  disabled: false,
  ariaLabel: 'One-time password',
})

const model = defineModel<string>({ default: '' })
const inputs = useTemplateRef<HTMLInputElement[]>('inputs')
const digits = computed(() => Array.from({ length: props.length }, (_, index) => model.value[index] ?? ''))

function update(index: number, value: string) {
  const digit = value.replace(/\D/g, '').at(-1) ?? ''
  const next = digits.value.slice()
  next[index] = digit
  model.value = next.join('').slice(0, props.length)
  if (digit)
    nextTick(() => inputs.value?.[Math.min(index + 1, props.length - 1)]?.focus())
}

function handleKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'Backspace' && !digits.value[index])
    inputs.value?.[Math.max(0, index - 1)]?.focus()
}

function handlePaste(event: ClipboardEvent) {
  const value = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, props.length)
  if (!value)
    return
  event.preventDefault()
  model.value = value
  nextTick(() => inputs.value?.[Math.min(value.length, props.length) - 1]?.focus())
}
</script>

<template>
  <div class="flex gap-2" role="group" :aria-label="ariaLabel" @paste="handlePaste">
    <input :name="name" type="hidden" :value="model">
    <input
      v-for="(_, index) in digits"
      :key="index"
      ref="inputs"
      class="h-10 w-10 rounded-md border border-border bg-background text-center text-lg outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
      inputmode="numeric"
      autocomplete="one-time-code"
      maxlength="1"
      :disabled
      :value="digits[index]"
      :aria-label="`Digit ${index + 1}`"
      @input="update(index, ($event.target as HTMLInputElement).value)"
      @keydown="handleKeydown($event, index)"
    >
  </div>
</template>
