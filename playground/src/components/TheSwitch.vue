<script lang="ts" setup>
const mv = ref(true)
const switchToggle = ref(true)
const switchDisabled = ref(true)
</script>

<template>
  <OCard title="Switch">
    <div space-y-2>
      <OCard title="Basic" :description="`Test ModelValue: ${mv}`">
        <div fsc gap-2>
          <OSwitch v-model="mv" o="primary" />
          <OSwitch :model-value="true" o="primary" />
          <OSwitch light :model-value="true" o="primary" />
          <OSwitch light :model-value="true" background-color="red" o="primary" />
          <OSwitch background-color="red" :model-value="true" o="success" />
          <OSwitch :model-value="true" o="warning" />
        </div>
      </OCard>
      <OCard title="Size">
        <div fsc gap-2>
          <OSwitch :model-value="true" o="primary" size="sm" />
          <OSwitch :model-value="true" o="primary" size="sm" light />
          <OSwitch :model-value="true" o="success" size="md" />
          <OSwitch :model-value="true" o="success" size="md" light />
          <OSwitch :model-value="true" o="warning" size="lg" />
          <OSwitch :model-value="true" o="warning" size="lg" light />
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
