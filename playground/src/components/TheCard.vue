<script lang="ts" setup>
const message = '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。'
const description = '卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合'
// eslint-disable-next-line no-console
const handleClick = () => { console.log('点击操作按钮') }
</script>

<template>
  <Card name="Card">
    <div grid="~ cols-2 gap-4">
      <o-card title="标题" />
      <o-card title="标题" :content="message" />
      <o-card title="标题" bordered size="sm">
        {{ message }}
      </o-card>
      <o-card title="标题" :bordered="false" hover-shadow>
        {{ message }}
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>
      <o-card title="标题" :bordered="false" hover-shadow header-bordered>
        {{ message }}
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>

      <o-card title="标题">
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
        <template #footer>
          <a href="javascript:void(0)" @click="handleClick">操作1</a>
          <a href="javascript:void(0)" @click="handleClick">操作2</a>
          <a href="javascript:void(0)" @click="handleClick">操作3</a>
        </template>
      </o-card>
      <o-card title="标题" sub-title="副标题">
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
        <template #footer>
          <a href="javascript:void(0)" @click="handleClick">操作1</a>
          <a href="javascript:void(0)" @click="handleClick">操作2</a>
          <a href="javascript:void(0)" @click="handleClick">操作3</a>
        </template>
      </o-card>
      <o-card title="标题" :description="description">
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>
      <o-card title="标题" actions="操作" @action="handleClick" />
      <o-card title="标题" />
      <o-card title="标题" />
      <o-card title="标题" />
    </div>
  </Card>
</template>
