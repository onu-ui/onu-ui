<script setup lang="ts">
import { Alert, Button, Card, Empty, Kbd, Separator, Skeleton, Spinner } from 'onu-ui'
</script>

<template>
  <Card title="反馈与基础组件" description="Alert、Empty、Kbd、Separator、Skeleton 和 Spinner 与 preset 一一对应。">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-4">
        <Alert title="配置已保存" description="组件 API 与 UnoCSS 语义样式保持分离。">
          <template #icon>
            <span aria-hidden="true">✓</span>
          </template>
        </Alert>
        <Alert variant="destructive" title="连接失败">
          请检查网络后重试。
        </Alert>
        <Alert variant="soft" title="有可用更新" description="升级前请先阅读迁移说明。" />

        <div class="flex items-center gap-2 text-sm">
          <span>打开命令面板</span>
          <Separator orientation="vertical" class="h-5" />
          <Kbd outline>
            ⌘ K
          </Kbd>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <Empty title="暂无项目" description="创建第一个项目后，它会显示在这里。" class="min-h-48">
          <template #media>
            <span aria-hidden="true">◇</span>
          </template>
          <Button size="sm">
            创建项目
          </Button>
        </Empty>

        <div class="flex items-center gap-3" aria-label="加载示例">
          <Spinner size="sm" variant="primary" label="正在加载" />
          <div class="flex flex-1 flex-col gap-2">
            <Skeleton variant="text" class="w-2/3" />
            <Skeleton variant="text" />
          </div>
        </div>

        <div class="flex items-center gap-4" aria-label="加载尺寸">
          <Spinner v-for="size in ['xs', 'sm', 'md', 'lg'] as const" :key="size" :size="size" :label="`${size} 加载状态`" />
        </div>
      </div>
    </div>
  </Card>
</template>
