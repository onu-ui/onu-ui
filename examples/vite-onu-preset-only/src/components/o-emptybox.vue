<template>
  <OCard title="Emptybox Component" desc="用于列表、搜索和数据页面的静态空状态外观。">
    <div emptybox min-h-64>
      <div emptybox-header>
        <div class="emptybox-media emptybox-media-icon">
          <i i-carbon-folder-open />
        </div>
        <div emptybox-title>
          还没有项目
        </div>
        <p emptybox-desc>
          创建第一个项目后，最近活动和协作者会显示在这里。
        </p>
      </div>
      <div emptybox-content>
        <button btn type="button">
          <i i-carbon-add />
          创建项目
        </button>
      </div>
    </div>
  </OCard>
</template>
