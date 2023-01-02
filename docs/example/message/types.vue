<script setup lang='ts'>
import { OMessage } from 'onu-ui'
const open1 = () => {
  OMessage({
    content: 'This is a primary message',
    type: 'primary',
  })
}

const open2 = () => {
  OMessage({
    content: 'This is a secondary message',
    type: 'secondary',
  })
}
const open3 = () => {
  OMessage({
    content: 'This is a success message',
    type: 'success',
  })
}
const open4 = () => {
  OMessage({
    content: 'This is a warning message',
    type: 'warning',
  })
}
const open5 = () => {
  OMessage({
    content: 'This is a error message',
    type: 'error',
  })
}
const open6 = () => {
  OMessage({
    content: 'This is a info message',
    type: 'info',
  })
}
</script>

<template>
  <div fscw gap-2>
    <o-button type="primary" @click="open1">
      primary
    </o-button>
    <o-button type="secondary" @click="open2">
      secondary
    </o-button>
    <o-button type="success" @click="open3">
      success
    </o-button>
    <o-button type="warning" @click="open4">
      warning
    </o-button>
    <o-button type="error" @click="open5">
      error
    </o-button>
    <o-button type="info" @click="open6">
      info
    </o-button>
  </div>
</template>

<style>

</style>
