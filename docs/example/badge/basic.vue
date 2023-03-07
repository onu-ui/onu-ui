<template>
  <div fscw gap-6>
    <o-badge o="primary" :value="100">
      <o-button type="primary" light>
        Primary
      </o-button>
    </o-badge>
    <o-badge :value="9">
      <o-avatar class="o-gray dark-o-#3a3a3c" rounded />
    </o-badge>
    <o-badge o="warning" value="happy">
      <o-button type="error" light>
        Custom Color
      </o-button>
    </o-badge>
    <o-badge o="info" dot :value="100">
      <o-button type="info" light>
        Only Dot
      </o-button>
    </o-badge>
  </div>
</template>
