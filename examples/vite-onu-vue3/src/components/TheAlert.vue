<script lang="ts" setup>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const title = 'With Title'
function handleClose() {
  // eslint-disable-next-line no-console
  console.log('click the close icon')
}
</script>

<template>
  <OCard title="Alert">
    <div grid="~ gap-4 cols-1 md:cols-2 xl:cols-2">
      <o-alert o="primary">
        {{ content }}
      </o-alert>
      <o-alert o="secondary">
        {{ content }}
      </o-alert>
      <o-alert o="success">
        {{ content }}
      </o-alert>
      <o-alert o="warning">
        {{ content }}
      </o-alert>
      <o-alert o="error">
        {{ content }}
      </o-alert>
      <o-alert o="info" :description="content" />
      <o-alert o="primary" light>
        {{ content }}
      </o-alert>
      <o-alert o="secondary" light>
        {{ content }}
      </o-alert>
      <o-alert o="success" light>
        {{ content }}
      </o-alert>
      <o-alert o="warning" light>
        {{ content }}
      </o-alert>
      <o-alert o="error" light>
        {{ content }}
      </o-alert>
      <o-alert o="info" :description="content" light />
      <o-alert o="primary" :description="content" :title="title" />
      <o-alert o="primary" :description="content" title="Center title and description" center />
      <o-alert o="primary" :description="content" :title="title" closable />
      <o-alert o="primary" :description="content" :title="`${title} and Close Text`" closable close-text="close" />
      <o-alert o="primary" :description="content" :title="`${title} and Icon`" closable icon="i-carbon-logo-github" />
      <o-alert o="primary" title="Custom title and close" :description="content" closable @close="handleClose">
        <template #icon>
          <o-icon name="i-fluent-emoji-astonished-face" text-6 />
        </template>
        <template #close>
          <o-icon name="i-fluent-emoji:alien" text-4 />
        </template>
      </o-alert>
    </div>
  </OCard>
</template>
