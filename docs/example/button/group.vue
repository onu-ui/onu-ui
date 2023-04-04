<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button-group>
        <o-button type="primary">
          Previous Page
          <template #icon>
            <div i-carbon-chevron-left />
          </template>
        </o-button>
        <o-button type="secondary" class="align-bottom">
          Next Page <div i-carbon-chevron-right />
        </o-button>
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
  </div>
</template>
