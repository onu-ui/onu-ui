<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
import onuUI from 'onu-ui'
const msg = ref('Hello Onu UI!')
const checkVal = ref(true)
const mv = ref(true)
const avatarSrcs = 'https://images.unsplash.com/photo-1660594714679-19b0173e0558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div fscw gap-2>
      <OBadge :value="100">
        <o-button o="primary">
          <o-icon h-5 w-5 o="gray" name="i-carbon-moon" />
          Primary
        </o-button>
      </OBadge>
    </div>
    <div fscw gap-2>
      <o-checkbox o="white" label="Vue" size="lg" icon="i-logos-vue" />
      <o-checkbox
        v-model="checkVal"
        label="basic use"
        o-primary
      />
    </div>

    <div fscw gap-2>
      <o-switch v-model="mv" o="primary" />
      <o-switch v-model="mv" v o="secondary" />
      <o-switch v-model="mv" o="success" />
      <o-switch v-model="mv" o="warning" />
      <o-switch v-model="mv" o="error" />
      <o-switch v-model="mv" o="info" />
    </div>

    <div fscw gap-2>
      <o-avatar :src="avatarSrcs" />
    </div>

    <div fscw gap-2>
      <o-tag o="primary">
        mary
      </o-tag>
      <o-tag o="secondary">
        secondary
      </o-tag>
      <o-tag o="success">
        success
      </o-tag>
      <o-tag o="warning">
        warning
      </o-tag>
      <o-tag o="error">
        error
      </o-tag>
      <o-tag o="info">
        info
      </o-tag>
      <o-tag o="primary" bg-color="#1abc9c">
        custom-bg
      </o-tag>
    </div>

    <p>Vue {{ vueVersion }}</p>
    <p>onuUI {{ onuUI.version }}</p>
  </div>
</template>

<style>
.container {
  padding: 20px;
}
</style>
