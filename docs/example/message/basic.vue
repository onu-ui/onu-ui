<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
const open = () => {
  message('This is a message')
}
</script>

<template>
  <o-button type="primary" @click="open">
    Show Message
  </o-button>
</template>
