<script lang="ts" setup>

</script>

<template>
  <OCard o-white title="Badge">
    <div space-y-2>
      <div fsc gap-2>
        <OBadge o="error" :content="100">
          <OButton o="error" light>
            Error
          </OButton>
        </OBadge>
        <OBadge o="warning" :content="100">
          <OButton o="warning" light>
            Warning
          </OButton>
        </OBadge>
        <OBadge o="success" :content="100">
          <OButton o="success" light>
            Success
          </OButton>
        </OBadge>
        <OBadge o="info" :content="100">
          <OButton o="info" light>
            Info
          </OButton>
        </OBadge>
        <OBadge o="primary" :content="100">
          <OButton o="primary" light>
            Primary
          </OButton>
        </OBadge>
        <OBadge o="secondary" content="secondary">
          <OButton o="secondary" light>
            Secondary
          </OButton>
        </OBadge>
      </div>
      <div fsc gap-2>
        <OBadge o="error" :content="666666" :max="999999">
          <OButton o="error" light>
            Error
          </OButton>
        </OBadge>
      </div>
      <div fsc gap-2>
        <OBadge o="error" :content="666666" :max="999999" dot>
          <OButton o="error" light>
            is a dot
          </OButton>
        </OBadge>
      </div>
    </div>
  </OCard>
</template>
