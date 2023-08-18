<script lang="ts" setup>
import { Components } from './components'
import SubTitle from './SubTitle.vue'
import ComponentCard from './ComponentCard.vue'
</script>

<template>
  <div class="space-y-10">
    <div v-for="(category, cKey) in Components" :key="cKey">
      <SubTitle>
        {{ category.name }}
        <span text-xl>{{ `(${category.components.length})` || '' }}</span>
      </SubTitle>
      <div class="grid md:grid-cols-3  gap-5">
        <ComponentCard v-for="(component, pKey) in category.components" :key="pKey" :component="component" />
      </div>
    </div>
  </div>
</template>
