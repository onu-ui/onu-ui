<script setup lang="ts" name="O-Button">
 interface IButtonProps {
  to?: string
  icon?: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
}

withDefaults(defineProps<IButtonProps>(), {
  to: 'circle',
  icon: 'medium',
  type: '',
})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :class="[
      type === 'primary' && 'bg-[#409eff] text-white o-borderless active:bg-[#337ecc] hover:bg-[#79bbff] hover:text-white hover:o-borderless',
      type === 'success' && 'bg-[#67C23A] text-white o-borderless active:bg-[#337ecc] hover:bg-[#95d475] hover:text-white hover:o-borderless',
      type === 'info' && 'bg-[#909399] text-white o-borderless active:bg-[#73767a] hover:bg-[#b1b3b8] hover:text-white hover:o-borderless',
      type === 'warning' && 'bg-[#e6a23c] text-white o-borderless active:bg-[#b88230] hover:bg-[#eebe77] hover:text-white hover:o-borderless',
      type === 'danger' && 'bg-[#f56c6c] text-white o-borderless active:bg-[#c45656] hover:bg-[#f89898] hover:text-white hover:o-borderless',
      type === 'danger' && 'bg-[#f56c6c] text-white o-borderless active:bg-[#c45656] hover:bg-[#f89898] hover:text-white hover:o-borderless',
      type === '' && '',
      to && 'o-button-link',
    ]"
    class="o-transition o-button-base hover:o-button-hover active:o-button-active focus-visible:o-focus-base o-disabled:o-disabled inline-flex items-center justify-center"
  >
    <slot name="icon">
      <!-- <NIcon v-if="icon" :icon="icon" class="c-buttoc-icon" /> -->
    </slot>
    <slot />
  </component>
</template>
