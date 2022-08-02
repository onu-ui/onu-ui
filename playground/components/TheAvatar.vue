<script lang='ts' setup>
import { OAvatar } from '@onu-ui/components'
const src = 'https://images.unsplash.com/photo-1652368760346-a4e16ca581bf'
</script>

<template>
  <Card name="Avatar">
    <OAvatar shape="square" :src="src" />
    <o-avatar :src="src" />
  </Card>
</template>

<style lang='scss' scoped>
</style>
