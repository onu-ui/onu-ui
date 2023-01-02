<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>

<template>
  <div fscw space-y-2>
    <o-alert type="primary" light>
      {{ content }}
    </o-alert>
    <o-alert type="secondary" light>
      {{ content }}
    </o-alert>
    <o-alert type="success" light>
      {{ content }}
    </o-alert>
    <o-alert type="warning" light>
      {{ content }}
    </o-alert>
    <o-alert type="error" light>
      {{ content }}
    </o-alert>
    <o-alert type="info" light>
      {{ content }}
    </o-alert>
  </div>
</template>
