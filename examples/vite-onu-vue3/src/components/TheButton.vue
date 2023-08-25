<script lang="ts" setup>
const githubUrl = 'https://github.com/onu-ui/onu-ui'

const loading = ref(false)
function startLoading() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <OCard title="Button">
    <div space-y-2>
      <div fsc gap-2>
        <o-button-group>
          <OButton type="primary">
            Previous Page
            <template #icon>
              <div i-carbon-chevron-left />
            </template>
          </OButton>
          <OButton type="secondary" class="align-bottom">
            Next Page <div i-carbon-chevron-right />
          </OButton>
        </o-button-group>
        <o-button-group>
          <OButton>
            <template #icon>
              <div i-carbon-asleep />
            </template>
          </OButton>
          <OButton>
            <template #icon>
              <div i-carbon-basketball />
            </template>
          </OButton>
          <OButton>
            <template #icon>
              <div i-carbon-ai-status-rejected />
            </template>
          </OButton>
        </o-button-group>
        <o-button-group spacer>
          <OButton rounded-full type="primary">
            <template #icon>
              <div i-carbon-asleep />
            </template>
          </OButton>
          <OButton rounded-full type="primary">
            <template #icon>
              <div i-carbon-basketball />
            </template>
          </OButton>
          <OButton rounded-full type="primary">
            <template #icon>
              <div i-carbon-ai-status-rejected />
            </template>
          </OButton>
        </o-button-group>
      </div>
      <div fsc gap-2>
        <OButton o="primary">
          Primary
        </OButton>
        <OButton o-secondary>
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
          Mini
        </OButton>
        <OButton size="sm" o="secondary">
          Small
        </OButton>
        <OButton size="md" o="success">
          Medium
        </OButton>
        <OButton size="lg" o="warning">
          Large
        </OButton>
        <OButton size="lg" type="warning" icon="i-carbon-logo-github" />
        <OButton size="lg" type="warning" icon="i-carbon-logo-github">
          Github
        </OButton>
        <o-button :to="githubUrl" o="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
        </o-button>
        <o-button o="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
        </o-button>
        <o-button o="success" rounded-full>
          <template #icon>
            <div i-carbon-logo-wechat />
          </template>
        </o-button>
        <o-button o="error" rounded-full>
          <template #icon>
            <div i-carbon-music />
          </template>
        </o-button>
        <o-button o="info" :loading="loading" @click="startLoading">
          {{ loading ? 'Loading~~' : 'Start Load' }}
        </o-button>
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
      </div>
      <div fsc gap-2>
        <OButton disabled o="primary">
          Disabled
        </OButton>
        <OButton disabled o="secondary">
          Disabled
        </OButton>
        <OButton disabled o="success">
          Disabled
        </OButton>
        <OButton disabled o="warning">
          Disabled
        </OButton>
        <OButton disabled o="error">
          Disabled
        </OButton>
      </div>
    </div>
  </OCard>
</template>
