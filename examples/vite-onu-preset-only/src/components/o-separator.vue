<template>
  <OCard title="Separator Component" desc="用于区分内容层级的水平或垂直语义分隔线。">
    <div flex="~ col gap-5">
      <div>
        <div text-sm font-medium>
          Onu UI
        </div>
        <p mt-1 text-xs text-muted-foreground>
          Pure CSS component foundations
        </p>
      </div>
      <div separator />
      <div h-5 flex items-center gap-4 text-sm>
        <span>文档</span>
        <div separator-v />
        <span>组件</span>
        <div class="separator-v separator-strong" />
        <span>主题</span>
      </div>
    </div>
  </OCard>
</template>
