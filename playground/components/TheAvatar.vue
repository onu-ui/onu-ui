<script lang='ts' setup>
const src = 'https://images.unsplash.com/photo-1652368760346-a4e16ca581bf'
</script>

<template>
  <Card name="Avatar">
    <O-Avatar shape="square" :src="src" />
    <O-Avatar :src="src" />
  </Card>
</template>

<style lang='scss' scoped>
</style>
