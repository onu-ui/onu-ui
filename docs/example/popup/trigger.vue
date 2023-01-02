<script lang="ts" setup>
const handleVisibleChange = (visible: boolean) => {
  // eslint-disable-next-line no-console
  console.log(visible)
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-popup title="Title">
        <o-button type="error">
          Hover
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
      <o-popup title="Title" trigger="click">
        <o-button type="secondary">
          Click
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
      <o-popup title="Title" trigger="context-menu">
        <o-button type="success">
          Context-menu
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
      <o-popup
        title="Title"
        trigger="focus"
        @popup-visible-change="handleVisibleChange"
      >
        <o-button type="warning">
          Focus
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
    </div>
  </div>
</template>
