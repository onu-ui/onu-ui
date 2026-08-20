<script setup lang="ts">
import { OAlert, OButton, OCard, OEmpty, OKbd, OSeparator, OSkeleton, OSpinner } from 'onu-ui'
</script>

<template>
  <OCard title="反馈与基础组件" description="Alert、Empty、Kbd、Separator、Skeleton 和 Spinner 与 preset 一一对应。">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-4">
        <OAlert title="配置已保存" description="组件 API 与 UnoCSS 语义样式保持分离。">
          <template #icon>
            <span aria-hidden="true">✓</span>
          </template>
        </OAlert>
        <OAlert variant="destructive" title="连接失败">
          请检查网络后重试。
        </OAlert>

        <div class="flex items-center gap-2 text-sm">
          <span>打开命令面板</span>
          <OSeparator orientation="vertical" class="h-5" />
          <OKbd outline>
            ⌘ K
          </OKbd>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <OEmpty title="暂无项目" description="创建第一个项目后，它会显示在这里。" class="min-h-48">
          <template #media>
            <span aria-hidden="true">◇</span>
          </template>
          <OButton size="sm">
            创建项目
          </OButton>
        </OEmpty>

        <div class="flex items-center gap-3" aria-label="加载示例">
          <OSpinner size="sm" variant="primary" label="正在加载" />
          <div class="flex flex-1 flex-col gap-2">
            <OSkeleton variant="text" class="w-2/3" />
            <OSkeleton variant="text" />
          </div>
        </div>
      </div>
    </div>
  </OCard>
</template>
