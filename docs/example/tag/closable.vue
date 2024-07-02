<script lang="ts" setup>
function handleClose() {
  alert('click the close icon')
}
function handleClick() {
  alert('click the tag')
}
</script>

<template>
  <div fscw gap-2>
    <o-tag type="secondary" closable @close="handleClose" @click="handleClick">
      Closable
    </o-tag>
    <o-tag type="secondary" light closable @close="handleClose" @click="handleClick">
      Closable
    </o-tag>
  </div>
</template>
