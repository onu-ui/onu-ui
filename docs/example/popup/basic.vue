<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-popup title="Title">
        <o-button type="primary">
          Hover
        </o-button>
        <template #content>
          <p>Here is the text content</p>
          <p>Here is the text content</p>
        </template>
      </o-popup>
    </div>
  </div>
</template>
