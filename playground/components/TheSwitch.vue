<script lang="ts" setup>
const switchVal = ref(false)
const switchLoading = ref(true)
const switchDisabled = ref(false)
const customModel = ref('checked')
</script>

<template>
  <Card name="Swicth">
    <div space-y-2>
      <div fsc gap-2>
        {{ switchVal }}
        <OSwitch v-model="switchVal" size="small" />
        <OSwitch v-model="switchVal" size="medium" />
        <OSwitch v-model="switchVal" size="large" />
      </div>
      <div fsc gap-2>
        Loading:
        <OSwitch v-model="switchLoading" is-loading />
        Disabled:
        <OSwitch v-model="switchDisabled" disabled />
      </div>
      <div fsc gap-2>
        <OSwitch
          v-model="customModel"
          checked-value="checked"
          un-checked-value="unchecked"
        />
        modelVal:{{ customModel }}
      </div>
      <div fsc gap-2>
        <OSwitch v-model="switchVal">
          <template #unchecked="_slotProps">
            <span>unchecked</span>
          </template>
          <template #checked="_slotProps">
            <span>checked</span>
          </template>
        </OSwitch>
      </div>
    </div>
  </Card>
</template>
