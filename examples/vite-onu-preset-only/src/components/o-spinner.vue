<template>
  <OCard title="Spinner Component" desc="使用 CSS animation 表达处理中状态，不包含计时或异步逻辑。">
    <div flex="~ col gap-5">
      <div flex items-center gap-4 flex-wrap>
        <span class="spinner spinner-xs spinner-muted" aria-label="加载中" />
        <span class="spinner spinner-sm spinner-primary" aria-label="加载中" />
        <span class="spinner spinner-md spinner-primary" aria-label="加载中" />
        <span class="spinner spinner-lg spinner-primary" aria-label="加载中" />
      </div>
      <div flex items-center gap-3 flex-wrap>
        <button btn type="button" disabled>
          <span spinner aria-hidden="true" />
          正在保存
        </button>
        <button class="btn btn-outline" type="button">
          <span class="spinner spinner-xs" aria-hidden="true" />
          同步数据
        </button>
      </div>
    </div>
  </OCard>
</template>
