<script lang="ts" setup>
const switchToggle = ref(true)
const switchDisabled = ref(true)
</script>

<template>
  <OCard o-white title="Switch">
    <div space-y-2>
      <OCard title="Basic">
        <div fsc gap-2>
          <OSwitch background-color="#fff" :model-value="true" o="primary" />
          <OSwitch light :model-value="true" o="success" />
          <OSwitch :model-value="true" o="warning" />
        </div>



        b
      </OCard>
      <OCard title="Size">
        <div fsc gap-2>
          <OSwitch :model-value="true" o="primary" size="sm" />
          <OSwitch :model-value="true" o="success" size="md" />
          <OSwitch :model-value="true" o="warning" size="lg" />
        </div>
      </OCard>
      <OCard title="Disabled">
        <div fsc gap-2>
          Toggle Disabled:
          <OSwitch v-model="switchToggle" o="red" />
          Disabled:
          <OSwitch v-model="switchDisabled" o-primary :disabled="switchToggle" />
        </div>
      </OCard>
    </div>
  </OCard>
</template>
