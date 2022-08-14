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
        <OButton o="warning" rounded="full">
          Warning
        </OButton>
        <OButton o="error" rounded="full">
          Danger
        </OButton>
        <OButton o="info" rounded="full">
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
        <OButton o="success light">
          Success
        </OButton>
        <OButton light o="warning dashed" rounded="full">
          Warning
        </OButton>
        <OButton light o="error dashed" rounded="full">
          Danger
        </OButton>
        <OButton light o="info dashed" rounded="full">
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
        <OButton text o="warning" rounded="full">
          Warning
        </OButton>
        <OButton text o="error" rounded="full">
          Danger
        </OButton>
        <OButton text o="info" rounded="full">
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
      <div fsc gap-2>
        <o-button :to="githubUrl" o="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
          Github
        </o-button>
        <o-button o="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
          Share
        </o-button>
        <o-button o="success">
          <template #icon>
            <div i-carbon-logo-wechat />
          </template>
          WeChat
        </o-button>
        <o-button o="error">
          <template #icon>
            <div i-carbon-music />
          </template>
          Music
        </o-button>
        <o-button o="info">
          <template #icon>
            <div i-carbon-circle-dash animate-spin />
          </template>
          Loading
        </o-button>
      </div>
      <div fsc gap-2>
        <OButton disabled o="primary">
          Primary
        </OButton>
        <OButton disabled o="secondary">
          Secondary
        </OButton>
        <OButton disabled o="success">
          Success
        </OButton>
        <OButton disabled o="warning">
          Warning
        </OButton>
        <OButton disabled o="error">
          Danger
        </OButton>
      </div>
    </div>
  </Card>
</template>
