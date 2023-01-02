<script setup lang='ts'>
const githubUrl = 'https://github.com/onu-ui/onu-ui'
</script>

<template>
  <div fscw gap-2>
    <o-button :to="githubUrl" type="primary">
      <template #icon>
        <div i-carbon-logo-github text-white />
      </template>
    </o-button>
    <o-button :to="githubUrl" type="info" class="!text-white">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      Github
    </o-button>
  </div>
</template>
