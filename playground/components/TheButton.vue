<script lang="ts" setup>
const githubUrl = 'https://github.com/onu-ui/onu-ui'
</script>

<template>
  <Card name="Button">
    <div space-y-2>
      <div fsc gap-2>
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
      <div fsc gap-2>
        <OButton light o="primary">
          Primary
        </OButton>
        <OButton light o="secondary">
          Secondary
        </OButton>
        <OButton  o="success light">
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
      <div fsc gap-2>
        <OButton text o="primary">
          Primary
        </OButton>
        <OButton text o="secondary">
          Secondary
        </OButton>
        <OButton o="success text">
          Success
        </OButton>
        <OButton text o="warning">
          Warning
        </OButton>
        <OButton text o="error">
          Danger
        </OButton>
        <OButton text o="info">
          Info
        </OButton>
      </div>
      <div fsc gap-2>
        <OButton size="xs" o="primary">
          Primary
        </OButton>
        <OButton size="sm" o="secondary">
          Secondary
        </OButton>
        <OButton size="md" o="success">
          Success
        </OButton>
        <OButton size="lg" o="warning">
          Warning
        </OButton>
        <OButton size="xl" o="error">
          Danger
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
