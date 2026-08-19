<script setup lang="ts">
interface SemanticPair {
  token: string
  title: string
  description: string
  previewClass: string
  sample: string
  followsTheme?: boolean
}

defineProps<{
  themeColor: string
  isDark: boolean
}>()

const semanticPairs: SemanticPair[] = [
  {
    token: 'background / foreground',
    title: '页面基础',
    description: '应用的最底层背景，以及页面中默认的标题、正文和图标颜色。',
    previewClass: 'bg-background text-foreground border-border',
    sample: '阅读内容',
  },
  {
    token: 'card / card-foreground',
    title: '内容容器',
    description: '卡片、设置面板和仪表盘区块等独立内容表面。',
    previewClass: 'bg-card text-card-foreground border-border',
    sample: '卡片内容',
  },
  {
    token: 'popover / popover-foreground',
    title: '浮层容器',
    description: '下拉菜单、浮层和上下文菜单等悬浮在页面之上的表面。',
    previewClass: 'bg-popover text-popover-foreground border-border',
    sample: '浮层内容',
  },
  {
    token: 'primary / primary-foreground',
    title: '主要操作',
    description: '页面中最高强调级别的操作、选中状态和品牌色表面。',
    previewClass: 'bg-primary text-primary-foreground border-primary',
    sample: '主要操作',
    followsTheme: true,
  },
  {
    token: 'secondary / secondary-foreground',
    title: '次要操作',
    description: '低于主要操作的填充按钮、标签和辅助功能区域。',
    previewClass: 'bg-secondary text-secondary-foreground border-secondary',
    sample: '次要操作',
    followsTheme: true,
  },
  {
    token: 'muted / muted-foreground',
    title: '弱化信息',
    description: '辅助说明、占位文字、禁用状态和低强调背景。',
    previewClass: 'bg-muted text-muted-foreground border-border',
    sample: '辅助说明',
    followsTheme: true,
  },
  {
    token: 'accent / accent-foreground',
    title: '交互强调',
    description: '菜单项、Ghost Button 和列表行的悬停、聚焦或选中状态。',
    previewClass: 'bg-accent text-accent-foreground border-accent',
    sample: '悬停状态',
    followsTheme: true,
  },
  {
    token: 'destructive / destructive-foreground',
    title: '危险操作',
    description: '删除、错误提示、无效输入等需要明确警示的界面内容。',
    previewClass: 'bg-destructive text-destructive-foreground border-destructive',
    sample: '删除项目',
  },
]
</script>

<template>
  <section card rounded-3xl shadow-none>
    <div card-header items-start>
      <div max-w-3xl>
        <div mb-3 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground>
          <span size-1.5 rounded-full bg-primary />
          Semantic color system
        </div>
        <h2 text="2xl sm:3xl" font-semibold tracking-tight>
          语义颜色角色
        </h2>
        <p mt-2 text-sm leading-6 text-muted-foreground>
          组件不再直接依赖某个灰色色阶，而是根据用途消费语义颜色。品牌相关表面会随主题色变化，页面容器与危险色保持独立，以维持层级和含义。
        </p>
      </div>
      <span hidden sm:inline-flex badge="~ outline" whitespace-nowrap>
        8 组颜色对
      </span>
    </div>

    <div card-body>
      <div mb-4 flex flex-col gap-4 rounded-xl border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between>
        <div>
          <div text-sm font-semibold>
            全局主题正在生效
          </div>
          <p mt-1 text-xs text-muted-foreground>
            {{ themeColor }} · {{ isDark ? '暗色模式' : '亮色模式' }} · 下方带“跟随主题”标记的色块会同步变化
          </p>
        </div>
        <div flex items-center gap-1.5 aria-label="当前语义主题色阶">
          <span h-7 w-10 rounded-l-lg bg-primary />
          <span h-7 w-10 bg-secondary />
          <span h-7 w-10 bg-muted />
          <span h-7 w-10 rounded-r-lg bg-accent />
        </div>
      </div>

      <div grid="~ cols-1 md:cols-2 xl:cols-4 gap-3">
        <article
          v-for="item in semanticPairs"
          :key="item.token"
          class="group min-h-52 flex flex-col justify-between rounded-xl border p-4 o-transition hover:-translate-y-0.5 hover:shadow-md"
          :class="item.previewClass"
          :data-semantic-token="item.token"
        >
          <div>
            <div flex items-start justify-between gap-3>
              <span text-sm font-semibold>{{ item.title }}</span>
              <span v-if="item.followsTheme" rounded-full border border-current border-op-20 px-2 py-0.5 text="[10px]" font-medium opacity-75>
                跟随主题
              </span>
              <span v-else size-2 rounded-full bg-current opacity-50 />
            </div>
            <code mt-2 block break-all text-xs opacity-70>{{ item.token }}</code>
            <p mt-4 text-sm leading-6 opacity-80>
              {{ item.description }}
            </p>
          </div>
          <div mt-5 flex items-center justify-between border-t border-current border-op-15 pt-3>
            <span text-xs opacity-65>实时预览</span>
            <span rounded-md border border-current border-op-25 px-2.5 py-1 text-xs font-medium>
              {{ item.sample }}
            </span>
          </div>
        </article>
      </div>

      <div mt-4 grid="~ cols-1 lg:cols-3 gap-3">
        <div rounded-xl border border-border bg-background p-4 data-semantic-token="border">
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                border
              </div>
              <p mt-1 text-xs text-muted-foreground>
                跟随主题色变化，用于卡片、表格和分隔线的默认边界。
              </p>
            </div>
            <div size-12 rounded-lg border-4 border-border bg-card />
          </div>
        </div>

        <div rounded-xl border border-border bg-background p-4 data-semantic-token="input">
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                input
              </div>
              <p mt-1 text-xs text-muted-foreground>
                跟随主题色变化，用于 Input、Textarea 和 Select 的控件边界。
              </p>
            </div>
            <input class="input w-28" aria-label="输入框颜色示例" placeholder="输入内容">
          </div>
        </div>

        <div rounded-xl border border-border bg-background p-4 data-semantic-token="ring">
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                ring
              </div>
              <p mt-1 text-xs text-muted-foreground>
                跟随主题色变化，键盘操作时统一显示焦点轮廓。
              </p>
            </div>
            <button class="size-12 rounded-lg bg-background ring-2 ring-ring ring-offset-2 ring-offset-background" aria-label="焦点环颜色示例">
              <i i-carbon-cursor-1 text-lg />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
