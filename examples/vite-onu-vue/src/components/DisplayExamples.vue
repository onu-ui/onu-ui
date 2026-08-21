<script setup lang="ts">
import { Avatar, AvatarGroup, Badge, Card } from 'onu-ui'

const avatarUrl = 'https://avatars.githubusercontent.com/u/42139754'
</script>

<template>
  <Card title="展示组件" description="Avatar、Badge 与 Card 直接消费 preset 的 shortcuts。">
    <div class="flex flex-col gap-6">
      <div class="flex items-center gap-4 flex-wrap">
        <Avatar :src="avatarUrl" alt="Chris" online class="rounded-full" />
        <Avatar :src="avatarUrl" alt="Chris" size="lg" variant="hexagon" />
        <Avatar size="sm" class="rounded-full">
          ON
        </Avatar>
      </div>

      <AvatarGroup size="sm" space-x="-3" aria-label="项目成员">
        <Avatar v-for="index in 3" :key="index" :src="avatarUrl" :alt="`成员 ${index}`" class="rounded-full" />
        <Avatar class="rounded-full">
          +9
        </Avatar>
      </AvatarGroup>

      <div class="flex items-center gap-3 flex-wrap">
        <Badge size="xs">
          Beta
        </Badge>
        <Badge variant="outline">
          Vue 3.5
        </Badge>
        <span class="relative inline-flex p-2">
          通知
          <Badge dot position="tr" class="badge-red" aria-label="有新通知" />
        </span>
        <Badge size="lg" class="badge-emerald">
          Ready
        </Badge>
      </div>
    </div>

    <template #footer>
      <span class="text-xs text-muted-foreground">所有 attrs 与 class 都会透传到语义根元素。</span>
    </template>
  </Card>
</template>
