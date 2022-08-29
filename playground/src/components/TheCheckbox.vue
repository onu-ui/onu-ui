<script lang="ts" setup>
const checkVal = ref(true)
const checkValDisable = ref(false)
const checkValIndeterminate = ref(true)
const customLabelString = ref('String-true')
const customLabelNumber = ref(0)
</script>

<template>
  <OCard title="Checkbox" o-white>
    <div space-y-2>
      <div fsc gap-2>
        <o-checkbox
          label="basic use"
        />
        <o-checkbox
          v-model="checkVal"
        >
          test
        </o-checkbox>
      </div>
      <!-- <div fsc gap-2>
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
      </div> -->
    </div>
  </OCard>
</template>
