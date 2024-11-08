<script lang='ts' setup>
import { useSlots } from 'vue'

defineProps<{
  title: string
  desc?: string
  showClose?: boolean
}>()

defineSlots<{
  default: (props: unknown) => any
  footer: (props: unknown) => any
}>()

const slots = useSlots()
</script>

<template>
  <div card>
    <div card-header>
      <div>
        <h3 card-title>
          {{ title }}
        </h3>
        <p v-if="desc" card-desc>
          {{ desc }}
        </p>
      </div>
      <i v-if="showClose" card-close text-xl i-carbon-close />
    </div>
    <div card-body>
      <slot />
    </div>
    <div v-if="slots.footer" card-footer>
      <slot name="footer" />
    </div>
  </div>
</template>
