<script lang='ts' setup name="O-Icon">
defineProps<{
  name: String
}>()
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
