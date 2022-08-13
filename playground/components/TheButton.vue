<script lang="ts" setup>
const githubUrl = 'https://github.com/onu-ui/onu-ui'
</script>

<template>
  <Card name="Button">
    <div f-c-c gap-2>
      <div fcc gap-2>
        <OButton o="primary">
          Primary
        </OButton>
        <OButton o="secondary">
          Secondary
        </OButton>
        <OButton o="success">
          Success
        </OButton>
        <OButton o="warning">
          Warning
        </OButton>
        <OButton o="error">
          Danger
        </OButton>
        <OButton o="info">
          Info
        </OButton>
      </div>
      <div fcc gap-2>
        <OButton o="primary light">
          Primary
        </OButton>
        <OButton light o="secondary">
          Secondary
        </OButton>
        <OButton light o="success">
          Success
        </OButton>
        <OButton light o="warning">
          Warning
        </OButton>
        <OButton light o="error">
          Danger
        </OButton>
        <OButton light o="info">
          Info
        </OButton>
      </div>
      <div fcc gap-2>
        <o-button :to="githubUrl">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
          github
        </o-button>
      </div>
    </div>
  </Card>
</template>
