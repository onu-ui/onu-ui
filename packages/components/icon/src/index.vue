<script lang='ts' setup name="OIcon">
defineProps<{
  name: String
}>()
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
