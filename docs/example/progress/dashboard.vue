<script setup lang='ts'>
const percentage = ref(20)
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

onMounted(() => {
  setInterval(() => {
    percentage.value = (percentage.value % 100) + 10
  }, 500)
})
</script>

<template>
  <div fscw gap-2>
    <o-progress type="dashboard" :percentage="20" :color="customColors" />
    <o-progress type="dashboard" stroke-width="lg" :percentage="percentage" :color="customColors" />
  </div>
</template>
