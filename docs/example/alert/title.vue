<template>
  <div fscw space-y-2>
    <o-alert o="primary" :description="content" :title="title" />
  </div>
</template>

<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const title = 'With Title'
</script>
