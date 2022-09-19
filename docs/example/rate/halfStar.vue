<template>
  <div fsc gap-6>
    <div>
      <p>Rate: {{ val }}</p>
      <ORate v-model="val" allow-half />
    </div>
  </div>
</template>

<script lang="ts" name="ORateHalfStar" setup>
const val = ref(2.5)
</script>
