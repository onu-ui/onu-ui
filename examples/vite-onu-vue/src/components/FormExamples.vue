<script setup lang="ts">
import { Button, ButtonGroup, Card, Checkbox, Input, RadioGroup, Switch } from 'onu-ui'
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
  <Card title="表单组件" description="使用类型安全的 v-model，并保留原生表单语义。">
    <form class="flex flex-col gap-5" @submit.prevent>
      <label class="flex flex-col gap-2 text-sm font-medium">
        邮箱
        <Input v-model="email" type="email" name="email" placeholder="you@example.com">
          <template #prefix><span aria-hidden="true">@</span></template>
        </Input>
      </label>

      <RadioGroup v-model="plan" :options="plans" name="plan" />
      <Checkbox v-model="agreed" name="terms">
        我同意服务条款
      </Checkbox>
      <Switch v-model="notifications" name="notifications">
        接收更新通知
      </Switch>

      <ButtonGroup spacer>
        <Button type="submit" :disabled="!agreed">
          保存设置
        </Button>
        <Button variant="outline" type="reset">
          重置
        </Button>
      </ButtonGroup>
    </form>
  </Card>
</template>
