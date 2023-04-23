<script lang="ts" setup>
const handleVisibleChange = (visible: boolean) => {
  // eslint-disable-next-line no-console
  console.log(visible)
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <OToolTip>
        <o-button type="error">
          Hover
        </o-button>
        <template #content>
          Here is the text content
        </template>
      </OToolTip>
      <OToolTip trigger="click">
        <o-button type="secondary">
          Click
        </o-button>
        <template #content>
          Here is the text content
        </template>
      </OToolTip>
      <OToolTip trigger="context-menu">
        <o-button type="success">
          Context-menu
        </o-button>
        <template #content>
          Here is the text content
        </template>
      </OToolTip>
      <OToolTip
        trigger="focus"
        @popup-visible-change="handleVisibleChange"
      >
        <o-button type="warning">
          Focus
        </o-button>
        <template #content>
          Here is the text content
        </template>
      </OToolTip>
    </div>
  </div>
</template>
