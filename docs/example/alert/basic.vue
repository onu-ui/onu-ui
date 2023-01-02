<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>

<template>
  <div fscw space-y-2>
    <o-alert type="primary">
      {{ content }}
    </o-alert>
    <o-alert type="secondary">
      {{ content }}
    </o-alert>
    <o-alert type="success">
      {{ content }}
    </o-alert>
    <o-alert type="warning">
      {{ content }}
    </o-alert>
    <o-alert type="error">
      {{ content }}
    </o-alert>
    <o-alert type="info">
      {{ content }}
    </o-alert>
  </div>
</template>
