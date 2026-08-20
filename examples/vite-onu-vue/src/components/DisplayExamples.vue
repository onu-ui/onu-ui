<script setup lang="ts">
import { OAvatar, OAvatarGroup, OBadge, OCard } from 'onu-ui'

const avatarUrl = 'https://avatars.githubusercontent.com/u/42139754'
</script>

<template>
  <OCard title="展示组件" description="Avatar、Badge 与 Card 直接消费 preset 的 shortcuts。">
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-4 flex-wrap">
        <OAvatar :src="avatarUrl" alt="Chris" online class="rounded-full" />
        <OAvatar :src="avatarUrl" alt="Chris" size="lg" variant="hexagon" />
        <OAvatar size="sm" class="rounded-full">
          ON
        </OAvatar>
      </div>

      <OAvatarGroup size="sm" space-x="-3" aria-label="项目成员">
        <OAvatar v-for="index in 3" :key="index" :src="avatarUrl" :alt="`成员 ${index}`" class="rounded-full" />
        <OAvatar class="rounded-full">
          +9
        </OAvatar>
      </OAvatarGroup>

      <div class="flex items-center gap-3 flex-wrap">
        <OBadge size="xs">
          Beta
        </OBadge>
        <OBadge variant="outline">
          Vue 3.5
        </OBadge>
        <span class="relative inline-flex p-2">
          通知
          <OBadge dot position="tr" class="badge-red" aria-label="有新通知" />
        </span>
        <OBadge size="lg" class="badge-emerald">
          Ready
        </OBadge>
      </div>
    </div>

    <template #footer>
      <span class="text-xs text-muted-foreground">所有 attrs 与 class 都会透传到语义根元素。</span>
    </template>
  </OCard>
</template>
