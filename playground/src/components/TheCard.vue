<script lang="ts" setup>
const message = '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。'
const description = '这是一段描述信息：卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合'
// eslint-disable-next-line no-console
const handleClick = () => { console.log('点击操作按钮') }
</script>

<template>
  <Card name="Card">
    <div class="flex flex-col items-start" bg-transparent px>
      <o-card title="单标题" my />
      <o-card :content="message" />
      <o-card title="标题加内容" :content="message" shadow my />
      <o-card title="sm Card" bordered size="sm" my>
        {{ message }}
      </o-card>
      <o-card title="无边框" :bordered="false" shadow my>
        {{ message }}
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>
      <o-card title="有分隔线" hover-shadow header-bordered my>
        {{ message }}
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>

      <o-card title="底部自定义" my>
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
        <template #footer>
          <div fbc>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
          </div>
        </template>
      </o-card>
      <o-card title="副标题底部自定义" subtitle="副标题" my>
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
        <template #footer>
          <div fbc>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
          </div>
        </template>
      </o-card>
      <o-card title="描述信息" :description="description" my>
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
      </o-card>
      <o-card
        title="综合"
        header-bordered
        actions="操作"
        :description="description"
        my
        hover-shadow
        @action="handleClick"
      >
        {{ message }}
        <template #actions>
          <a href="javascript:void(0)" @click="handleClick">操作</a>
        </template>
        <template #footer>
          <div fbc>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
            <OButton o="secondary" size="sm">
              Primary
            </OButton>
          </div>
        </template>
      </o-card>
    </div>
  </Card>
</template>
