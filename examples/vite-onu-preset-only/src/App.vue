<script setup lang="ts">
import { FlowLayout } from 'vue-flow-layout'
import AvatarLayout from './components/o-avatar.vue'
import BadgeLayout from './components/o-badge.vue'
import ButtonLayout from './components/o-button.vue'
import CheckboxLayout from './components/o-checkbox.vue'
import InputLayout from './components/o-input.vue'
import RadioLayout from './components/o-radio.vue'
import SwitchLayout from './components/o-switch.vue'
import SemanticTheme from './components/semantic-theme.vue'

const isWideLayout = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <div min-h-screen bg-background text-foreground o-transition>
    <header fixed inset-x-0 top-0 z-20 border-b border-border bg-background:88 backdrop-blur-xl>
      <div mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8>
        <div flex items-center gap-3>
          <div size-9 flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm>
            <i i-onu-logo text-xl />
          </div>
          <div>
            <div text-sm font-semibold tracking-tight>
              Onu UI
            </div>
            <div text-xs text-muted-foreground>
              Semantic theme preview
            </div>
          </div>
        </div>

        <div flex items-center gap-1 rounded-full border border-border bg-card p-1 text-card-foreground shadow-sm>
          <button class="size-8 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground" title="随机主题色" @click="randomTheme()">
            <i i-carbon-color-palette />
          </button>
          <button class="size-8 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground" title="切换圆角" @click="changeRadius()">
            <i i-carbon-rotate-counterclockwise-alt-filled />
          </button>
          <button class="size-8 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground" title="切换亮色或暗色" @click="toggleDark()">
            <i i-carbon-sun dark:i-carbon-moon />
          </button>
          <a class="size-8 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground" href="https://github.com/onu-ui/onu-ui" target="_blank" title="查看 GitHub">
            <i i-carbon-logo-github />
          </a>
        </div>
      </div>
    </header>

    <main mx-auto max-w-7xl px-4 pb-16 pt-26 sm:px-6 lg:px-8>
      <section mb-8 grid="~ cols-1 lg:cols-[1fr_auto] gap-6" items-end>
        <div max-w-3xl>
          <p mb-3 text-sm font-medium text-primary>
            @onu-ui/preset · OKLCH semantic tokens
          </p>
          <h1 text="4xl sm:5xl" font-semibold tracking-tight leading-tight>
            让颜色表达用途，<br><span text-muted-foreground>而不是具体色值。</span>
          </h1>
          <p mt-4 max-w-2xl text-base leading-7 text-muted-foreground>
            点击右上角可以切换主题色、圆角和暗色模式。下面每个区域都直接使用新的语义颜色 utility。
          </p>
        </div>

        <div rounded-2xl border border-border bg-card p-3 shadow-sm>
          <div mb-2 text-xs font-medium text-muted-foreground>
            选择品牌色
          </div>
          <div flex items-center justify-start gap-2 flex-wrap>
            <button
              v-for="c in themeColors" :key="c"
              :class="c === themeColors[themeIdx] ? 'ring-2 ring-ring ring-offset-2 ring-offset-background' : ''"
              :title="c" size-7 cursor-pointer rounded-lg border border-border :style="{ backgroundColor: c }"
              :aria-label="`切换主题色为 ${c}`"
              @click="generateTheme(c)"
            />
          </div>
        </div>
      </section>

      <SemanticTheme />

      <section mt-12>
        <div mb-5>
          <p text-sm font-medium text-primary>
            Component migration
          </p>
          <h2 mt-1 text-2xl font-semibold tracking-tight>
            现有组件适配效果
          </h2>
          <p mt-2 text-sm text-muted-foreground>
            Card、Input、Badge、Switch 等组件已经开始消费上方的语义颜色。
          </p>
        </div>

        <FlowLayout :cols="isWideLayout ? 2 : 1" :gap="24" w-full>
          <ButtonLayout />
          <AvatarLayout />
          <BadgeLayout />
          <InputLayout />
          <SwitchLayout />
          <RadioLayout />
          <CheckboxLayout />
          <OCard title="Card Component" desc="Card、Card Foreground、Muted Foreground 与 Border 的组合效果">
            <div rounded-lg bg-muted p-4 text-muted-foreground>
              这是一块使用 muted 语义颜色的辅助内容区域。
            </div>
            <template #footer>
              <button btn>
                主要操作
              </button>
              <button class="btn btn-ghost">
                次要操作
              </button>
            </template>
          </OCard>
        </FlowLayout>
      </section>
    </main>
  </div>
</template>
