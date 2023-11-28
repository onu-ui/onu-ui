<script lang='ts' setup>
import { iconProps } from './props'

defineOptions({
  name: 'OIcon',
})
defineProps(iconProps)
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
