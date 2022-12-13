<template>
  <div fscw gap-6>
    <div>
      <p text-baseText>
        Rate: {{ val }}
      </p>
      <ORate v-model="val" color="teal" void-color="error" />
    </div>
    <div>
      <p text-baseText>
        Rate: {{ valPrimary }}
      </p>
      <ORate v-model="valPrimary" color="secondary" void-color="primary" />
    </div>
  </div>
</template>

<script lang="ts" name="ORateCustomColor" setup>
const val = ref(2)
const valPrimary = ref(4)
</script>
