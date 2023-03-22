<script setup lang="ts" name="OLink">
import { linkEmits, linkProps } from './link'

const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const isDisabled = computed(() => props.disabled)
const isUnderline = computed(() => props.underline && !props.disabled)
const typeLink = computed(() => props.type !== 'default')

function handleClick(event: MouseEvent) {
  if (!props.disabled)
    emit('click', event)
}
</script>

<template>
  <a>
    <div
      class="o-link-base inline-flex"
      :class="[
        isDisabled ? 'o-disabled' : 'o-hover-link-active-base',
        `o-${type}`,
        typeLink && `c-context ${isDisabled ? '' : `hover-text-${type}LightHover active-text-${type}LightActive`} `,
        isUnderline && `link-hover-underline`,
      ]" :href="disabled || !href ? undefined : href" @click="handleClick"
    >
      <o-icon v-if="icon" :name="icon" />
      <span v-if="$slots.default" class="fcc inline-flex">
        <slot />
      </span>
      <slot v-if="$slots.icon" name="icon" />
    </div></a>
</template>

<style scoped>
.link-hover-underline:hover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1.5px solid;
}
</style>
