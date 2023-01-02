<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const title = 'With Title'
const handleClose = () => {
  alert('click the close icon')
}
</script>

<template>
  <div fscw space-y-2>
    <o-alert type="error" :description="content" :title="`${title} and Icon`" closable icon="i-carbon-logo-github" />
    <o-alert type="secondary" title="Custom title and close" :description="content" closable @close="handleClose">
      <template #icon>
        <o-icon name="i-fluent-emoji:clown-face" text-6 />
      </template>
      <template #close>
        <o-icon name="i-fluent-emoji:articulated-lorry" text-4 />
      </template>
    </o-alert>
  </div>
</template>
