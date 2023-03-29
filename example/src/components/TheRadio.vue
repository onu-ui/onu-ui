<script setup lang='ts'>
import { OMessage } from 'onu-ui'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
const radio5 = ref('1')
const radio6 = ref('1')

function handleChange(value: string | number | boolean) {
  OMessage.info({
    content: String(value),
    closable: true,
  })
}
</script>

<template>
  <OCard title="Radio">
    <div class="space-y-2">
      <div flex gap-2 flex-wrap flex-col>
        <o-radio-group v-model="radio1">
          <o-radio label="1">
            Option 1
          </o-radio>
          <o-radio label="2" disabled>
            Option 2
          </o-radio>
          <o-radio label="3">
            Option 3
          </o-radio>
        </o-radio-group>
        <o-radio-group v-model="radio2" disabled>
          <o-radio label="1">
            disabled 1
          </o-radio>
          <o-radio label="2">
            disabled 2
          </o-radio>
        </o-radio-group>
        <o-radio-group v-model="radio3">
          <o-radio label="1" size="xs">
            large 1
          </o-radio>
          <o-radio label="2" size="sm">
            large 2
          </o-radio>
          <o-radio label="3" size="md">
            large 3
          </o-radio>
          <o-radio label="4" size="lg">
            default 4
          </o-radio>
        </o-radio-group>
        <o-radio-group v-model="radio4">
          <o-radio label="1" fill="primary" text-color="success">
            primary
          </o-radio>
          <o-radio label="2" fill="secondary">
            secondary
          </o-radio>
          <o-radio label="3" fill="success">
            success
          </o-radio>
          <o-radio label="4" fill="warning">
            warning
          </o-radio>
          <o-radio label="5" fill="error">
            error
          </o-radio>
          <o-radio label="6" fill="info">
            info
          </o-radio>
        </o-radio-group>
        <o-radio-group v-model="radio5" @change="handleChange">
          <o-radio label="1" label-color="primary" not-text-color>
            primary
          </o-radio>
          <o-radio label="2" label-color="secondary" not-text-color>
            secondary
          </o-radio>
          <o-radio label="3" label-color="success" not-text-color>
            success
          </o-radio>
          <o-radio label="4" label-color="warning" not-text-color>
            warning
          </o-radio>
          <o-radio label="5" label-color="error" not-text-color>
            error
          </o-radio>
          <o-radio label="6" label-color="info" not-text-color>
            info
          </o-radio>
        </o-radio-group>
        <o-radio-group v-model="radio6">
          <o-radio label="1" border>
            border 1
          </o-radio>
          <o-radio label="2" border>
            border 2
          </o-radio>
          <o-radio label="3" border disabled>
            border 3
          </o-radio>
        </o-radio-group>
      </div>
    </div>
  </OCard>
</template>
