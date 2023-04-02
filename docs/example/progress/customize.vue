<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="50">
      <o-button text type="primary">
        Content
      </o-button>
    </o-progress>
    <o-progress :percentage="50" :text-inside="true" :stroke-width="20" status="error">
      <span>Content</span>
    </o-progress>
    <div flex gap-2 class="w-fit">
      <o-progress type="circle" :percentage="100" status="success">
        <o-button type="success" rounded-full>
          <template #icon>
            <div i-carbon-checkmark-filled />
          </template>
        </o-button>
      </o-progress>
      <o-progress :percentage="80" type="dashboard">
        <template #default="{ percentage: percentageValue }">
          <span class="block mt-10px text-28px">{{ percentageValue }}%</span>
          <span class="block mt-10px text-12px">Progressing</span>
        </template>
      </o-progress>
    </div>
  </div>
</template>
