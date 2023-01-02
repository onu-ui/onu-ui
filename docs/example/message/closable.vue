<script setup lang='ts'>
import { OMessage } from 'onu-ui'
const open1 = () => {
  OMessage({
    content: 'This is a primary message',
    type: 'primary',
    closable: true,
  })
}

const open2 = () => {
  OMessage({
    content: 'This is a secondary message',
    type: 'secondary',
    closable: true,

  })
}
const open3 = () => {
  OMessage({
    content: 'This is a success message',
    type: 'success',
    closable: true,

  })
}
const open4 = () => {
  OMessage({
    content: 'This is a warning message',
    type: 'warning',
    closable: true,

  })
}
const open5 = () => {
  OMessage({
    content: 'This is a error message',
    type: 'error',
    closable: true,

  })
}
const open6 = () => {
  OMessage({
    content: 'This is a info message',
    type: 'info',
    closable: true,

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
