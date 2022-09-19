<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-popup title="Title">
        <o-button o-info>
          Hover
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
      <o-popup title="Title" trigger="click">
        <o-button o-secondary>
          Click
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
      <o-popup title="Title" trigger="context-menu">
        <o-button o-success>
          context-menu
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
        <o-button o-warning>
          focus
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleVisibleChange = (visible: boolean) => {
  // eslint-disable-next-line no-console
  console.log(visible)
}
</script>
