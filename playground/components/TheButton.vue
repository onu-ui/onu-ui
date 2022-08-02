<script lang="ts" setup>
import { OButton } from '@onu-ui/components'
const githubUrl = 'https://github.com/chris-zhu'
</script>

<template>
  <Card name="Button">
    <OButton>
      button
    </OButton>
    <OButton>
      button
    </OButton>
    <o-button :to="githubUrl">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      github
    </o-button>
  </Card>
</template>
