<script lang='ts' setup>
const src = 'https://images.unsplash.com/photo-1652368760346-a4e16ca581bf'
</script>

<template>
  <Card name="Avatar">
    <div space-y-2>
      <div fsc gap-2>
        <O-Avatar shape="square" :src="src" />
        <O-Avatar shape="circle" :src="src" />
      </div>
      <div fsc gap-2>
        <O-Avatar size="small" :src="src" />
        <O-Avatar size="default" :src="src" />
        <O-Avatar size="large" :src="src" />
      </div>
      <div fsc gap-2>
        <O-Avatar fit="fill" :src="src" />
        <O-Avatar fit="contain" :src="src" />
        <O-Avatar fit="cover" :src="src" />
        <O-Avatar fit="none" :src="src" />
        <O-Avatar fit="scaleDown" :src="src" />
      </div>
      <div fsc gap-2>
        <O-Avatar icon="i-carbon-logo-github" />
        <O-Avatar>123</O-Avatar>
      </div>
    </div>
  </Card>
</template>

<style lang='scss' scoped>
</style>
