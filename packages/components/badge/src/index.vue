<script lang="ts" setup name="O-Badge">
import {isNumber} from '@onu-ui/utils'

interface IBadgeProps {
  max: number
  content: string | number
  disabled?: boolean
  dot: boolean
  o: 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary',
}

const props = withDefaults(defineProps<IBadgeProps>(), {
  content: '',
  disabled: false,
  dot: false,
  max: 99,
  o: 'error',
})

const contentInner = ref<string | number>('')
watch(() => props.content, (nVal) => {
  if (nVal) {
    if (isNumber(props.content) && props.content > props.max)
      contentInner.value = `${props.max}+`
    else if (props.dot)
      contentInner.value = ''
    else
      contentInner.value = props.content
  }
}, {
  immediate: true,
})
</script>

<template>
  <div
      class="o-badge"
  >
    <slot/>
    <sup
        v-if="!disabled"
        :o="o"
        :class="`o-badge-sup o-badge-sup-fixed ${dot ? 'o-badge-sup-dot' : ''}`"
    >{{ contentInner }}</sup>
  </div>
</template>
