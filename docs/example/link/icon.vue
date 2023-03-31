<template>
  <div fscw gap-2>
    <o-link icon="i-carbon-letter-aa">
      front icon
    </o-link>
    <o-link type="secondary">
      behind icon <o-icon name="i-carbon-letter-bb" class="text-current" />
    </o-link>
    <o-link type="warning">
      behind icon
      <template #icon>
        <o-icon name="i-carbon-letter-bb" class="text-current" />
      </template>
    </o-link>
  </div>
</template>
