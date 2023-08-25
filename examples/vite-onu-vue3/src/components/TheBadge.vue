<script lang="ts" setup>

</script>

<template>
  <OCard title="Badge">
    <div space-y-2>
      <div fsc flex-wrap gap-4>
        <OBadge o="primary" :value="100">
          <OButton o="primary" light>
            Primary
          </OButton>
        </OBadge>
        <OBadge :value="9">
          <o-avatar src="https://images.unsplash.com/photo-1660594714679-19b0173e0558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" rounded />
        </OBadge>
        <OBadge o="teal" :value="100">
          <OButton o-error light>
            Custom Color
          </OButton>
        </OBadge>
        <OBadge o="info" dot :value="100">
          <OButton o="info" light>
            Only Dot
          </OButton>
        </OBadge>
        <OBadge o="secondary" value="Lorem Text ···">
          <OButton o="secondary" light>
            Secondary
          </OButton>
        </OBadge>
        <OBadge :value="0">
          <OButton o="primary" light>
            Zero
          </OButton>
        </OBadge>
        <OBadge show-zero :value="0">
          <OButton o="primary" light>
            Show Zero
          </OButton>
        </OBadge>
      </div>
    </div>
  </OCard>
</template>
