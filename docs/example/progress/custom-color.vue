<script setup lang='ts'>
const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const customColorMethod = (percentage: number) => {
  if (percentage < 30)
    return '#909399'

  if (percentage < 70)
    return '#e6a23c'

  return '#67c23a'
}
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100)
    percentage.value = 100
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0)
    percentage.value = 0
}
</script>

<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="percentage" :color="customColor" />
    <o-progress :percentage="percentage" :color="customColorMethod" />
    <o-progress :percentage="percentage" :color="customColors" />
    <o-progress :percentage="percentage" :color="customColors" />
    <div>
      <o-button class="mr-2" @click="increase">
        +
      </o-button>
      <o-button @click="decrease">
        -
      </o-button>
    </div>
  </div>
</template>
