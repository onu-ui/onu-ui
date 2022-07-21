<script lang='ts' setup name="O-Avatar">
interface IAvatarProps {
  src: string
  shape: 'square' | 'circle'
  size: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<IAvatarProps>(), {
  shape: 'circle',
  size: 'medium',
})
</script>

<template>
  <div>
    <div w-20 h-20 :style="{ backgroundImage: `url(${src})` }" :class="shape === 'circle' ? 'rounded-full' : 'rounded-md'" class="bg-cover" />
  </div>
</template>

<style lang='scss' scoped>
</style>
