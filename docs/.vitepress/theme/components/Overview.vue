<script lang='ts' setup>
import { ref } from 'vue'

const components = ref([
  'affix',
  'alert',
  'avatar',
  'backtop',
  'badge',
  'button',
  'card',
  'checkbox',
  'collapse',
  'dialog',
  'empty',
  'icon',
  'input',
  'link',
  'message',
  'notice',
  'popup',
  'progress',
  'radio',
  'rate',
  'swiper',
  'switch',
  'tag',
  'text',
  'tooltip',
])
</script>

<template>
  <ul class="!list-none" grid="~ cols-1 sm:cols-2 lg:cols-3 gap-6">
    <li v-for="component in components" :key="component" relative>
      <a :href="`/components/${component}`">
        <img select-none w-full aspect-square :src="`/svgs/${component}.svg`" :alt="component">
      </a>
      <div
        absolute bottom-0 left-0 right-0
        rounded lh-relaxed
        text="center xl theme-400 dark:theme-500" bg="theme-100-50 dark:theme-800-50"
      >
        {{ component.charAt(0).toUpperCase() + component.slice(1) }}
      </div>
    </li>
  </ul>
</template>
