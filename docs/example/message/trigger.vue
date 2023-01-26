<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
</script>

<template>
  <div fscw gap-2>
    <o-button light @click="$message.success('This is a success message')">
      Option API
    </o-button>
    <o-button light o-secondary @click="message.success('This is a success message')">
      Composition API
    </o-button>
  </div>
</template>
