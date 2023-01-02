<script setup lang='ts'>
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <slot v-if="mounted" />
</template>
