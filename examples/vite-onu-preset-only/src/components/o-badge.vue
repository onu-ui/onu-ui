<script lang='ts' setup>
import OCard from './o-card.vue'
</script>

<template>
  <OCard title="Badge Component" desc="Badge component with custom style">
    <div gap-2 flex-wrap mt-4>
      <div flex items-center justify-center gap-2>
        <span class="badge-default">Badge</span>
        <span class="badge badge-lg">Badge</span>
        <span class="badge">Badge</span>
        <span class="badge badge-sm">999,999</span>
        <span class="badge badge-xs">Badge</span>
        <span class="badge o-red text-red-100 dark:text-red-900">Badge</span>
      </div>
      <div mt-2 flex items-center justify-center gap-2>
        <div class="badge badge-lg" />
        <div class="badge badge-md" />
        <div class="badge badge-sm" />
        <div class="badge badge-xs" />

        <button class="btn">
          Inbox
          <div class="badge badge-sm o-red">
            +99
          </div>
        </button>
      </div>
    </div>
  </OCard>
</template>
