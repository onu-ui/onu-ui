<script lang="ts" setup>
import { withBase } from 'vitepress'
import type { PropType } from 'vue'
import type { Component } from './components'

defineProps({
  component: Object as PropType<Component>,
})
</script>

<template>
  <a
    :href="component?.link"
    class="o-overview_card_wrapper"
  >
    <div>
      <div v-if="component?.icon" class="o-overview_cover">
        <img :src="withBase(component.icon)" alt="">
      </div>
      <div class="o-overview_body">
        <div class="overview_body_title">
          {{ component?.name }}
        </div>
        <div class="text-xs opacity-60">
          {{ component?.description }}
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.vp-doc a {
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration-style: none;
}
</style>
