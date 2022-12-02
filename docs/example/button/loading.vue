<template>
  <o-button type="info" :loading="loading" @click="startLoading">
    {{ loading ? 'Loading~~' : 'Start Load' }}
  </o-button>
</template>

<script setup lang='ts'>
const loading = ref(false)
const startLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
