<template>
  <div fscw gap-6>
    <div>
      <p text-baseText>
        Rate: {{ val }}
      </p>
      <ORate v-model="val" allow-half />
    </div>
  </div>
</template>

<script lang="ts" name="ORateHalfStar" setup>
const val = ref(2.5)
</script>
