<script lang="ts" setup>
function handleClose() {
  alert('click the close icon')
}

function handleClick() {
  alert('click the tag')
}
</script>

<template>
  <OCard title="Tag">
    <div space-y-2>
      <div fsc gap-2>
        <o-tag o="primary">
          Primary
        </o-tag>
        <o-tag o="secondary">
          secondary
        </o-tag>
        <o-tag o="success">
          success
        </o-tag>
        <o-tag o="warning">
          warning
        </o-tag>
        <o-tag o="error">
          error
        </o-tag>
        <o-tag o="info">
          info
        </o-tag>
      </div>
      <div fsc gap-2>
        <o-tag o="primary" light>
          Primary
        </o-tag>
        <o-tag o="secondary" light>
          secondary
        </o-tag>
        <o-tag o="success" light>
          success
        </o-tag>
        <o-tag o="warning" light>
          warning
        </o-tag>
        <o-tag o="error" light>
          error
        </o-tag>
        <o-tag o="info" light>
          info
        </o-tag>
      </div>
      <div fsc gap-2>
        <o-tag o="primary" size="xs">
          Mini
        </o-tag>
        <o-tag o="secondary" size="sm">
          Small
        </o-tag>
        <o-tag o="success" size="md">
          Medium
        </o-tag>
        <o-tag o="warning" size="lg">
          Large
        </o-tag>
        <o-tag o="primary" disabled>
          disabled
        </o-tag>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-tag o="secondary" closable @close="handleClose" @click="handleClick">
          closable
        </o-tag>
        <o-tag o="secondary" light closable>
          closable
        </o-tag>
        <o-tag o="warning" rounded>
          rounded
        </o-tag>
        <o-tag o="primary" bg-color="#1abc9c">
          Custom background color
        </o-tag>
      </div>
    </div>
  </OCard>
</template>
