<template>
  <div fscw space-y-2>
    <o-alert o="primary" light>
      {{ content }}
    </o-alert>
    <o-alert o="secondary" light>
      {{ content }}
    </o-alert>
    <o-alert o="success" light>
      {{ content }}
    </o-alert>
    <o-alert o="warning" light>
      {{ content }}
    </o-alert>
    <o-alert o="error" light>
      {{ content }}
    </o-alert>
    <o-alert o="info" light>
      {{ content }}
    </o-alert>
  </div>
</template>

<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
</script>
