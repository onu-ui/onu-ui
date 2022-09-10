<template>
  <div fsc gap-6>
    <OBadge o="primary" :value="100">
      <OButton o="primary" light>
        Primary
      </OButton>
    </OBadge>
    <OBadge :value="9">
      <o-avatar class="o-gray dark-o-#3a3a3c" rounded />
    </OBadge>
    <OBadge o="teal" value="happy">
      <OButton o-error light>
        Custom Color
      </OButton>
    </OBadge>
    <OBadge o="info" dot :value="100">
      <OButton o="info" light>
        Only Dot
      </OButton>
    </OBadge>
  </div>
</template>
