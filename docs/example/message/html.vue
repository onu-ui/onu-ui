<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
const open = () => {
  message({
    parseHtml: true,
    content: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>

<template>
  <o-button @click="open">
    Use HTML String
  </o-button>
</template>
