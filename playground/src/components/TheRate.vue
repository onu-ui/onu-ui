<script lang="ts" setup>
const rate = ref(2.5)
</script>

<template>
  <OCard o-white title="Rate">
    <div space-y-2>
      <div fsc gap-4>
        {{ rate }}
        <o-rate v-model="rate" :max-value="10" text="123123" allow-half />
      </div>
    </div>
  </OCard>
</template>
