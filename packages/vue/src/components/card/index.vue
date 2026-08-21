<script setup lang="ts">
import { cardProps } from './props'

defineOptions({ name: 'Card' })

defineProps(cardProps)

defineSlots<{
  default?: () => any
  header?: () => any
  title?: () => any
  description?: () => any
  footer?: () => any
}>()
</script>

<template>
  <section class="card">
    <header v-if="title || description || $slots.header || $slots.title || $slots.description" class="card-header">
      <slot name="header">
        <div>
          <h3 v-if="title || $slots.title" class="card-title">
            <slot name="title">
              {{ title }}
            </slot>
          </h3>
          <p v-if="description || $slots.description" class="card-desc">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>
      </slot>
    </header>
    <div v-if="$slots.default" class="card-body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </footer>
  </section>
</template>
