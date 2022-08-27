<script lang="ts" setup>
const checkVal = ref(true)
const checkValDisable = ref(false)
const checkValIndeterminate = ref(true)
const customLabelString = ref('String-true')
const customLabelNumber = ref(0)
</script>

<template>
  <Card name="Checkbox">
    <div space-y-2>
      <div fsc gap-2>
        <o-checkbox
          v-model="checkVal"
          label="basic use"
        />
        <o-checkbox
          v-model="checkValDisable"
          disabled
          label="disabled"
        />
        <o-checkbox
          v-model="checkValIndeterminate"
          indeterminate
          label="indeterminate"
        />
      </div>
      <div fsc gap-2>
        <p>custom-label-string</p>
      </div>
      <div fsc gap-2>
        <o-checkbox
          v-model="customLabelString"
          :label="`v-model:${customLabelString}`"
          false-label="String-false"
          true-label="String-true"
        />
      </div>
      <div fsc gap-2>
        <p>
          custom-label-number
        </p>
      </div>
      <div fsc gap-2>
        <o-checkbox
          v-model="customLabelNumber"
          :label="`v-model:${customLabelNumber}`"
          :false-label="0"
          :true-label="1"
        />
      </div>
    </div>
  </Card>
</template>
