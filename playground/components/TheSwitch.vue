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
        {{switchVal}}
        <OSwitch v-model="switchVal" size="small">
        </OSwitch>
        <OSwitch v-model="switchVal" size="medium">
        </OSwitch>
        <OSwitch v-model="switchVal" size="large">
        </OSwitch>
      </div>
      <div fsc gap-2>
        Loading:
        <OSwitch v-model="switchLoading" is-loading>
        </OSwitch>
        Disabled:
        <OSwitch v-model="switchDisabled" disabled>
        </OSwitch>
      </div>
      <div fsc gap-2>
        <OSwitch v-model="customModel"
                 checked-value="checked"
                 un-checked-value="unchecked">
        </OSwitch>
        modelVal:{{customModel}}
      </div>
      <div fsc gap-2>
        <OSwitch v-model="switchVal">
          <template v-slot:unchecked="_slotProps">
            <span>unchecked</span>
          </template>
          <template v-slot:checked="_slotProps">
            <span>checked</span>
          </template>
        </OSwitch>
      </div>
    </div>
  </Card>
</template>
