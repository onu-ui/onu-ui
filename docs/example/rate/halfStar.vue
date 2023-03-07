<script lang="ts" setup>
import { ref } from 'vue'
const val = ref(2.5)
</script>

<template>
  <div fscw gap-6>
    <div>
      <p text-baseText>
        Rate: {{ val }}
      </p>
      <ORate v-model="val" allow-half />
    </div>
  </div>
</template>
