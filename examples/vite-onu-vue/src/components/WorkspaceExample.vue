<script setup lang="ts">
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Kbd,
  Separator,
  Spinner,
  Switch,
} from 'onu-ui'
import { computed, shallowRef } from 'vue'

const workspaceName = shallowRef('Onu Design System')
const publicAccess = shallowRef(false)
const releaseNotes = shallowRef(true)
const saving = shallowRef(false)
const saved = shallowRef(false)

const workspaceSlug = computed(() => workspaceName.value
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, ''))

async function saveWorkspace() {
  saving.value = true
  saved.value = false
  await new Promise(resolve => setTimeout(resolve, 650))
  saving.value = false
  saved.value = true
}
</script>

<template>
  <Card title="组合示例" description="一个由 Onu UI Vue 组件构成的工作区设置场景。">
    <div class="grid gap-7 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <form class="flex flex-col gap-5" @submit.prevent="saveWorkspace">
        <Alert v-if="saved" title="工作区已保存" description="新的设置已经立即生效。">
          <template #icon>
            <span aria-hidden="true">✓</span>
          </template>
        </Alert>

        <label class="flex flex-col gap-2 text-sm font-medium">
          工作区名称
          <Input v-model="workspaceName" name="workspace-name" maxlength="48">
            <template #suffix>
              <Kbd size="xs" outline>
                ⌘ S
              </Kbd>
            </template>
          </Input>
          <span class="text-xs font-normal text-muted-foreground">onu.dev/{{ workspaceSlug || 'workspace' }}</span>
        </label>

        <Separator />

        <div class="flex flex-col gap-4">
          <Switch v-model="publicAccess" name="public-access">
            允许公开访问
          </Switch>
          <Checkbox v-model="releaseNotes" name="release-notes">
            每周发送发布摘要
          </Checkbox>
        </div>

        <div class="flex items-center gap-3">
          <Button type="submit" :loading="saving">
            保存设置
          </Button>
          <Button variant="ghost" type="button" :disabled="saving">
            取消
          </Button>
          <Spinner v-if="saving" size="sm" variant="muted" label="正在同步设置" />
        </div>
      </form>

      <aside class="rounded-[calc(var(--onu-radius)+4px)] bg-muted p-5 text-muted-foreground">
        <div class="mb-4 flex items-center justify-between gap-3">
          <span class="text-sm font-semibold text-foreground">协作者</span>
          <Badge variant="outline" size="sm">
            4 members
          </Badge>
        </div>
        <AvatarGroup size="sm" space-x="-3" aria-label="工作区成员">
          <Avatar src="https://avatars.githubusercontent.com/u/42139754" alt="Chris" online class="rounded-full" />
          <Avatar src="https://avatars.githubusercontent.com/u/20306114" alt="Anthony" class="rounded-full" />
          <Avatar src="https://avatars.githubusercontent.com/u/11247099" alt="Daniel" class="rounded-full" />
          <Avatar class="rounded-full">
            +1
          </Avatar>
        </AvatarGroup>
        <p class="mt-5 text-sm leading-6">
          所有成员都能查看组件状态，只有管理员可以更新公开访问设置。
        </p>
      </aside>
    </div>
  </Card>
</template>
