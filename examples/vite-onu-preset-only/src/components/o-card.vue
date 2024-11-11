<script lang='ts' setup>
const props = defineProps<{
  title: string
  desc?: string
}>()

defineSlots<{
  default: (props: unknown) => any
  footer: (props: unknown) => any
}>()

const slots = useSlots()
const path = computed(() => {
  const name = props.title.toLowerCase().split(/\s+/)[0]
  return `https://github.com/onu-ui/onu-ui/blob/main/examples/vite-onu-preset-only/src/components/o-${name}.vue`
})
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
      <a card-close un-text="lg theme-400!" i-carbon:arrow-up-right hover="animate-rubber-band" :href="path" target="_blank" />
    </div>
    <div card-body>
      <slot />
    </div>
    <div v-if="slots.footer" card-footer>
      <slot name="footer" />
    </div>
  </div>
</template>
