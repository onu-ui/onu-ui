<script lang='ts' setup>
import { templateProps } from './props'

defineOptions({
  name: 'OTemplate',
})
const props = defineProps(templateProps)
</script>

<template>
  <div>
    <h1>Template</h1>
  </div>
</template>
