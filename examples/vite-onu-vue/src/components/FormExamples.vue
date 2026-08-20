<script setup lang="ts">
import { OButton, OButtonGroup, OCard, OCheckbox, OInput, ORadioGroup, OSwitch } from 'onu-ui'
import { shallowRef } from 'vue'

const email = shallowRef('hello@onu-ui.dev')
const agreed = shallowRef(false)
const notifications = shallowRef(true)
const plan = shallowRef<string | number | boolean>('starter')

const plans = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team', disabled: true },
]
</script>

<template>
  <OCard title="表单组件" description="使用类型安全的 v-model，并保留原生表单语义。">
    <form class="flex flex-col gap-5" @submit.prevent>
      <label class="flex flex-col gap-2 text-sm font-medium">
        邮箱
        <OInput v-model="email" type="email" name="email" placeholder="you@example.com">
          <template #prefix><span aria-hidden="true">@</span></template>
        </OInput>
      </label>

      <ORadioGroup v-model="plan" :options="plans" name="plan" />
      <OCheckbox v-model="agreed" name="terms">
        我同意服务条款
      </OCheckbox>
      <OSwitch v-model="notifications" name="notifications">
        接收更新通知
      </OSwitch>

      <OButtonGroup spacer>
        <OButton type="submit" :disabled="!agreed">
          保存设置
        </OButton>
        <OButton variant="outline" type="reset">
          重置
        </OButton>
      </OButtonGroup>
    </form>
  </OCard>
</template>
