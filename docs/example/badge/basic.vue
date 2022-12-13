<template>
  <div fscw gap-6>
    <OBadge o="primary" :value="100">
      <OButton type="primary" light>
        Primary
      </OButton>
    </OBadge>
    <OBadge :value="9">
      <o-avatar class="o-gray dark-o-#3a3a3c" rounded />
    </OBadge>
    <OBadge o="warning" value="happy">
      <OButton type="error" light>
        Custom Color
      </OButton>
    </OBadge>
    <OBadge o="info" dot :value="100">
      <OButton type="info" light>
        Only Dot
      </OButton>
    </OBadge>
  </div>
</template>
