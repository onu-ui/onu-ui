<script lang="ts" setup>
const checkVal = ref(true)
</script>

<template>
  <OCard title="Checkbox">
    <div space-y-2>
      <div fsc gap-2>
        <o-checkbox
          v-model="checkVal"
          o-primary
          label="basic use"
        />
        <o-checkbox
          o-success
        >
          Custom Color
        </o-checkbox>
        <o-checkbox
          :model-value="true"
          o-warning
          disabled
          label="Disabled"
        />
      </div>
      <div fsc gap-2>
        <span>Lg size & custom Icon: </span>
        <o-checkbox
          o="white"
          label="Vue"
          size="lg"
          icon="i-logos-vue"
        />
        <o-checkbox
          label="UnoCSS"
          size="lg"
          icon="i-logos-unocss"
        />
      </div>
    </div>
  </OCard>
</template>
