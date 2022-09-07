<template>
  <div fsc gap-2>
    <o-button :to="githubUrl" o="primary">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
    </o-button>
    <o-button :to="githubUrl" o="primary">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      Github
    </o-button>
  </div>
</template>

<script setup lang='ts'>
const githubUrl = 'https://github.com/onu-ui/onu-ui'
</script>
