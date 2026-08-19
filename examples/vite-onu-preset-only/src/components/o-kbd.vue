<template>
  <OCard title="Kbd Component" desc="展示快捷键、按键组合和不同尺寸的键盘提示。">
    <div flex="~ col gap-5">
      <div flex items-center justify-between gap-4 rounded-lg border border-border p-3>
        <span text-sm>打开命令面板</span>
        <span kbd-group>
          <kbd class="kbd kbd-outline">⌘</kbd>
          <kbd class="kbd kbd-outline">K</kbd>
        </span>
      </div>

      <div flex items-center gap-3 flex-wrap>
        <kbd class="kbd kbd-xs">Esc</kbd>
        <kbd kbd>⌘ K</kbd>
        <kbd class="kbd kbd-md">Shift</kbd>
        <kbd class="kbd kbd-lg kbd-outline">Enter</kbd>
      </div>
    </div>
  </OCard>
</template>
