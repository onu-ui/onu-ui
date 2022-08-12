<script lang="ts" setup>
const githubUrl = 'https://github.com/chris-zhu'
</script>

<template>
  <Card name="Button">
    <OButton>
      Default
    </OButton>
    <OButton type="primary">
      Primary
    </OButton>
    <OButton type="success">
      Success
    </OButton>
    <OButton type="warning">
      Warning
    </OButton>
    <OButton type="danger">
      Danger
    </OButton>
    <OButton type="info">
      Info
    </OButton>
    <o-button :to="githubUrl">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      github
    </o-button>
  </Card>
</template>
