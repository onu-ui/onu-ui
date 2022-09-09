<template>
  <div fscw space-y-2>
    <o-alert o="primary" :description="content" title="Center title and description" center />
  </div>
</template>

<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>
