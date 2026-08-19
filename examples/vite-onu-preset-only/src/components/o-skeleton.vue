<template>
  <OCard title="Skeleton Component" desc="加载数据时使用的纯 CSS 占位反馈，并尊重减少动画设置。">
    <div flex items-start gap-4>
      <div skeleton-avatar />
      <div flex-1 flex="~ col gap-3">
        <div class="skeleton-text w-2/5" />
        <div class="skeleton-text w-full" />
        <div class="skeleton-text w-4/5" />
      </div>
    </div>
    <div mt-5 h-28 w-full skeleton />
  </OCard>
</template>
