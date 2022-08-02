<script lang='ts' setup name="O-Icon">
interface IIconProps {
  icon: string
  depth?: 1 | 2 | 3 | 4 | 5 | 'none'
  size?: number | string
  color?: string
}

withDefaults(defineProps<IIconProps>(), {
  depth: 'none',
  size: '1em',
  color: 'currentColor',
})
</script>

<template>
  <div>
    <div :style="{ color, fontSize: size }" :class="icon" />
  </div>
</template>

<style lang='scss' scoped>
</style>
