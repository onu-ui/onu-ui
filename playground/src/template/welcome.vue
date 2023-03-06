<script setup lang="ts">
import { ref, version as vueVersion } from 'vue'
import onuUI, { OMessage as message } from 'onu-ui'

const msg = ref('Hello Onu UI!')
const checkVal = ref(true)
const mv = ref(true)
const avatarSrcs = 'https://github.com/zyyv.png'
const open = () => {
  message({
    content: 'Hello OnuUI!',
    closable: true,
  })
}

const className = 'dark'
const isDark = ref(false)

const toggleTheme = () => {
  if (typeof window !== 'undefined') {
    const rootCls = document.documentElement.classList
    isDark.value = !isDark.value
    if (isDark.value)
      rootCls.add(className)
    else
      rootCls.remove(className)
  }
}
</script>

<template>
  <div p-5 space-y-3>
    <h1>{{ msg }}</h1>
    <div inline-flex @click="toggleTheme()">
      Toogle Theme:
      <o-icon
        v-show="isDark" h-5 cursor-pointer w-5 mx-4 name="i-carbon-moon"
      />
      <o-icon v-show="!isDark" h-5 w-5 cursor-pointer mx-4 name="i-carbon-sun" />
    </div>
    <div fscw space-x-4>
      <o-badge :value="100">
        <o-button type="primary">
          <template #icon>
            <div i-carbon-share text-sm />
          </template>
          Primary
        </o-button>
      </o-badge>
      <o-button type="success" @click="open">
        Show Message
      </o-button>
    </div>
    <div fscw space-x-2>
      <o-checkbox o="white" label="Vue" size="lg" icon="i-logos-vue" />
      <o-checkbox v-model="checkVal" label="basic use" o-primary />
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
      <o-tag type="primary">
        Primary
      </o-tag>
      <o-tag type="secondary">
        Secondary
      </o-tag>
      <o-tag type="success">
        Success
      </o-tag>
      <o-tag type="warning">
        Warning
      </o-tag>
      <o-tag type="error">
        Error
      </o-tag>
      <o-tag type="info">
        Info
      </o-tag>
      <o-tag type="primary" bg-color="#1abc9c">
        Custom-Bg
      </o-tag>
    </div>

    <p>Vue {{ vueVersion }}</p>
    <p>onuUI {{ onuUI.version }}</p>
  </div>
</template>

<style>
body {
  color: var(--onu-colors-text);
  background-color: var(--onu-colors-background);
}
</style>
