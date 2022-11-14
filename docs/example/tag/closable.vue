<template>
  <div fscw gap-2>
    <o-tag o="secondary" closable @close="handleClose" @click="handleClick">
      closable
    </o-tag>
    <o-tag o="secondary" light closable @close="handleClose" @click="handleClick">
      closable
    </o-tag>
  </div>
</template>

<script lang="ts" setup>
const handleClose = () => {
  alert('click the close icon')
}
const handleClick = () => {
  alert('click the tag')
}
</script>
