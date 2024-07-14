<script setup lang="ts">
import { features } from '../data/features'
</script>

<template>
  <ul important="list-none pl-0">
    <li v-for="item in features" :key="item.title" grid="~ items-center gap-2 cols-1 lg:cols-[auto_minmax(0,1fr)]" class="group">
      <div flex="~ items-center gap-1.5">
        <i :class="item.icon" shrink-0 group-hover:text-theme-500 />
        <b shrink-0>{{ item.title }}</b>
        <span hidden lg:inline>-</span>
      </div>
      <span v-html="item.details" />
    </li>
  </ul>
</template>
