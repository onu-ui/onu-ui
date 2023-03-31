<script setup lang="ts" name="OText">
import type { CSSProperties } from 'vue'
import { fontMap, textProps } from './text'

const props = defineProps(textProps)

// todo: The size property should follow this inheritance rule: component props > custom group rule > formItem props > form props > global size > default
const textSize = computed(() => props.size || /** default */'md')
const htmlTag = computed(() => fontMap[props.font] || props.tag)
const textGradient = computed<CSSProperties | null>(() => {
  if (!props.gradient)
    return null
  return {
    'background-image': props.gradient,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }
})
</script>

<template>
  <component
    :is="htmlTag" class="o-text__wrapper self-center m-0 p-0 break-all" :class="[
      `text-${textSize}`,
      type ? `text-${type}Base` : 'text-baseText',
      truncated && `inline-block max-w-full truncate`,
    ]"
    :style="textGradient"
  >
    <slot />
  </component>
</template>

<style scope>
.o-text__wrapper>[class*="o-icon"] {
  display: inline-block;
  vertical-align: -2px;
}
</style>
