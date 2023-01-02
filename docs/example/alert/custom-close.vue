<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

const handleClose = () => {
  alert('click the close icon')
}
</script>

<template>
  <div fscw space-y-2>
    <o-alert type="primary" :description="content" closable @close="handleClose" />
    <o-alert
      type="success"
      :description="content"
      closable
      close-text="close"
      @close="handleClose"
    />
    <o-alert type="secondary" title="Custom title and close" :description="content" closable @close="handleClose">
      <template #icon>
        <o-icon name="i-fluent-emoji-astonished-face" text-6 />
      </template>
      <template #close>
        <o-icon name="i-fluent-emoji:alien" text-4 />
      </template>
    </o-alert>
  </div>
</template>
