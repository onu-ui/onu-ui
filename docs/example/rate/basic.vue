<template>
  <div fsc gap-6>
    <div>
      <p>Rate: {{ val }}</p>
      <ORate v-model="val" />
    </div>
    <div>
      <p>Rate: {{ valMax }}</p>
      <ORate v-model="valMax" :max="10" />
    </div>
  </div>
</template>

<script lang="ts" name="ORateBasic" setup>
const val = ref(2)
const valMax = ref(6)
</script>
