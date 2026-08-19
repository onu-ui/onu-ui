<template>
  <OCard title="Alert Component" desc="通过语义颜色表达普通提示、品牌提示和危险提示。">
    <div flex="~ col gap-3">
      <div alert role="alert">
        <i i-carbon-information />
        <div alert-title>
          配置已保存
        </div>
        <div alert-desc>
          默认 Alert 使用 Card、Border 与 Muted Foreground。
        </div>
      </div>

      <div class="alert alert-soft alert-blue" role="alert">
        <i i-carbon-cloud-upload />
        <div alert-title>
          正在同步
        </div>
        <div alert-desc>
          Soft 变体支持 alert-blue、alert-red 或任意主题 context。
        </div>
      </div>

      <div class="alert alert-destructive" role="alert">
        <i i-carbon-warning-alt />
        <div alert-title>
          无法删除项目
        </div>
        <div alert-desc>
          Destructive 始终保留危险操作的警示语义。
        </div>
      </div>
    </div>
  </OCard>
</template>
