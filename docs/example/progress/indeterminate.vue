<script setup lang='ts'>
const format = percentage => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="50" :indeterminate="true" />
    <o-progress :percentage="100" :format="format" :indeterminate="true" />
    <o-progress :percentage="100" status="success" :indeterminate="true" :duration="5" />
    <o-progress :percentage="100" status="warning" :indeterminate="true" :duration="1" />
    <o-progress :percentage="50" status="error" :indeterminate="true" />
  </div>
</template>
