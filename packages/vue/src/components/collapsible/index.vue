<script setup lang="ts">
defineOptions({ name: 'Collapsible' })

withDefaults(defineProps<{
  disabled?: boolean
  label?: string
}>(), {
  disabled: false,
  label: 'Toggle content',
})

const open = defineModel<boolean>({ default: false })
</script>

<template>
  <div>
    <slot name="trigger" :open="open" :toggle="() => open = !open">
      <button
        class="btn btn-outline"
        type="button"
        :disabled
        :aria-expanded="open"
        @click="open = !open"
      >
        {{ label }}
      </button>
    </slot>
    <div v-show="open" class="mt-2" role="region">
      <slot />
    </div>
  </div>
</template>
