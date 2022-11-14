<script lang="ts" setup>
const rate = ref(2.5)
</script>

<template>
  <OCard title="Rate">
    <div space-y-2>
      <div fsc gap-4>
        {{ rate }}
        <o-rate v-model="rate" :max="10" text="rate component" allow-half />
      </div>
    </div>
  </OCard>
</template>
