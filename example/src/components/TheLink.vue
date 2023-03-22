<script setup lang='ts'>

</script>

<template>
  <OCard title="Link">
    <div class="space-y-2">
      <div fsc gap-2 flex-wrap>
        <o-link>default</o-link>
        <o-link type="primary">
          primary
        </o-link>
        <o-link type="secondary">
          secondary
        </o-link>
        <o-link type="success">
          success
        </o-link>
        <o-link type="warning">
          warning
        </o-link>
        <o-link type="error">
          error
        </o-link>
        <o-link type="info">
          info
        </o-link>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-link disabled>
          default
        </o-link>
        <o-link type="primary" disabled>
          primary
        </o-link>
        <o-link type="secondary" disabled>
          secondary
        </o-link>
        <o-link type="success" disabled>
          success
        </o-link>
        <o-link type="warning" disabled>
          warning
        </o-link>
        <o-link type="error" disabled>
          error
        </o-link>
        <o-link type="info" disabled>
          info
        </o-link>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-link type="error" :underline="false">
          no-underline
        </o-link>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-link icon="i-carbon-letter-aa">
          front icon
        </o-link>
        <o-link type="secondary">
          behind icon <o-icon name="i-carbon-letter-bb" class="text-current" />
        </o-link>
        <o-link type="warning">
          behind icon
          <template #icon>
            <o-icon name="i-carbon-letter-bb" class="text-current" />
          </template>
        </o-link>
      </div>
    </div>
  </OCard>
</template>
