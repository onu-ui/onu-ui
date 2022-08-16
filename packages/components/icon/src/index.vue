<script lang='ts' setup name="O-Icon">
interface IIconProps {
  name: string
}

defineProps<IIconProps>()
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
