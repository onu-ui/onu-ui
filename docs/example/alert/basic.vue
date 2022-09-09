<template>
  <div fscw space-y-2>
    <o-alert o="primary">
      {{ content }}
    </o-alert>
    <o-alert o="secondary">
      {{ content }}
    </o-alert>
    <o-alert o="success">
      {{ content }}
    </o-alert>
    <o-alert o="warning">
      {{ content }}
    </o-alert>
    <o-alert o="error">
      {{ content }}
    </o-alert>
    <o-alert o="info">
      {{ content }}
    </o-alert>
  </div>
</template>

<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>
