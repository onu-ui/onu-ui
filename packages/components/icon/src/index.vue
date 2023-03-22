<script lang='ts' setup name="OIcon">
import { iconProps } from './props'

defineProps(iconProps)
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
