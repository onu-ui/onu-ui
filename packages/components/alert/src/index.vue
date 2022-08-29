<script lang='ts' setup name="O-Alert">
import { alertProps } from './props'

const props = defineProps(alertProps)
</script>

<template>
  <div class="o-alert" :class="[`o-alter-${size}`]">
    <slot />
  </div>
</template>
