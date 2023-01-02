<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const title = 'With Title'
</script>

<template>
  <div fscw space-y-2>
    <o-alert type="primary" :description="content" :title="title" />
  </div>
</template>
