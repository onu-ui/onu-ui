<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const teamMembers = [
  {
    avatar: 'https://www.github.com/zyyv.png',
    name: 'Chris',
    desc: 'Author of OnuUI & Team member of UnoCSS',
    title: 'An open source developer',
    links: [
      { icon: 'github', link: 'https://github.com/zyyv' },
      { icon: 'mastodon', link: 'https://elk.zone/mas.to/@chris_zhu' },
      { icon: 'twitter', link: 'https://twitter.com/chris_zyyv' },
    ],
  },
  {
    avatar: 'https://www.github.com/yzh990918.png',
    name: 'yzh990918',
    desc: 'Author of OnuUI & Core team member of Anse',
    title: 'An open source developer',
    links: [
      { icon: 'github', link: 'https://github.com/yzh990918' },
      { icon: 'twitter', link: 'https://twitter.com/zhihaoy18640576i' },
    ],
  },
  {
    avatar: 'https://www.github.com/xiaojieajie.png',
    name: 'xiaojieajie',
    desc: 'Team member of OnuUI',
    links: [
      { icon: 'github', link: 'https://github.com/xiaojieajie' },
    ],
  },
]
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            Meet The Team
          </h2>
          <div w-full p-10>
            <VPTeamMembers size="small" :members="teamMembers" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
