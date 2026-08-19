<script setup lang="ts">
interface SemanticPair {
  token: string
  title: string
  description: string
  previewClass: string
  sample: string
}

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
  },
  {
    token: 'secondary / secondary-foreground',
    title: '次要操作',
    description: '低于主要操作的填充按钮、标签和辅助功能区域。',
    previewClass: 'bg-secondary text-secondary-foreground border-secondary',
    sample: '次要操作',
  },
  {
    token: 'muted / muted-foreground',
    title: '弱化信息',
    description: '辅助说明、占位文字、禁用状态和低强调背景。',
    previewClass: 'bg-muted text-muted-foreground border-border',
    sample: '辅助说明',
  },
  {
    token: 'accent / accent-foreground',
    title: '交互强调',
    description: '菜单项、Ghost Button 和列表行的悬停、聚焦或选中状态。',
    previewClass: 'bg-accent text-accent-foreground border-accent',
    sample: '悬停状态',
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
          组件不再直接依赖某个灰色色阶，而是根据用途消费语义颜色。切换主题色或暗色模式时，组件关系保持一致。
        </p>
      </div>
      <span hidden sm:inline-flex badge="~ outline" whitespace-nowrap>
        8 组颜色对
      </span>
    </div>

    <div card-body>
      <div grid="~ cols-1 md:cols-2 xl:cols-4 gap-3">
        <article
          v-for="item in semanticPairs"
          :key="item.token"
          class="group min-h-52 flex flex-col justify-between rounded-xl border p-4 o-transition hover:-translate-y-0.5 hover:shadow-md"
          :class="item.previewClass"
        >
          <div>
            <div flex items-start justify-between gap-3>
              <span text-sm font-semibold>{{ item.title }}</span>
              <span size-2 rounded-full bg-current opacity-50 />
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
        <div rounded-xl border border-border bg-background p-4>
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                border
              </div>
              <p mt-1 text-xs text-muted-foreground>
                卡片、表格和分隔线的默认边界颜色。
              </p>
            </div>
            <div size-12 rounded-lg border-4 border-border bg-card />
          </div>
        </div>

        <div rounded-xl border border-border bg-background p-4>
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                input
              </div>
              <p mt-1 text-xs text-muted-foreground>
                Input、Textarea 和 Select 的控件边界。
              </p>
            </div>
            <input class="input w-28" aria-label="输入框颜色示例" placeholder="输入内容">
          </div>
        </div>

        <div rounded-xl border border-border bg-background p-4>
          <div flex items-center justify-between gap-4>
            <div>
              <div text-sm font-semibold>
                ring
              </div>
              <p mt-1 text-xs text-muted-foreground>
                键盘操作时统一显示的焦点轮廓颜色。
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
