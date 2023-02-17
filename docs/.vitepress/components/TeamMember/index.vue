<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'

const teamMembers = [{
  avatar: 'https://www.github.com/zyyv.png',
  name: 'zyyv',
  title: 'Author, Core team member of UnoCSS & OnuUI',
  links: [
    { icon: 'github', link: 'https://github.com/zyyv' },
    { icon: 'twitter', link: 'https://twitter.com/chris_zyyv' }
  ]
}, {
  avatar: 'https://www.github.com/yzh990918.png',
  name: 'yzh990918',
  title: 'Author, Core team member of OnuUI',
  links: [
    { icon: 'github', link: 'https://github.com/yzh990918' },
    { icon: 'twitter', link: 'https://twitter.com/zhihaoy18640576i' }
  ]
}, {
  avatar: 'https://www.github.com/baiwusanyu-c.png',
  name: 'baiwusanyu-c',
  title: 'Main contributor of OnuUI',
  links: [
    { icon: 'github', link: 'https://github.com/baiwusanyu-c' },
    { icon: 'twitter', link: 'https://twitter.com/jcchen740132583' }
  ]
}, {
  avatar: 'https://www.github.com/priority3.png',
  name: 'priority3',
  title: 'Main contributor of OnuUI',
  links: [
    { icon: 'github', link: 'https://github.com/priority3' },
    { icon: 'twitter', link: 'https://twitter.com/prioriycc' }
  ]
}, {
  avatar: 'https://www.github.com/xiaojieajie.png',
  name: 'xiaojieajie',
  title: 'Team member of OnuUI',
  links: [
    { icon: 'github', link: 'https://github.com/xiaojieajie' },
  ]
},]

const SpecialMembers = [{
  avatar: 'https://www.github.com/antfu.png',
  name: 'Anthony Fu',
  desc: 'Core team member of Vite & Vue',
  sponsor: 'https://github.com/sponsors/antfu',
  title: 'A fanatical open sourceror, working',
  org: 'NuxtLabs',
  orgLink: 'https://nuxtlabs.com/',
  links: [
    { icon: 'github', link: 'https://github.com/antfu' },
    { icon: 'twitter', link: 'https://github.com/antfu7' },
    { icon: 'discord', link: 'https://chat.antfu.me' },
    { icon: 'youtube', link: 'https://www.youtube.com/@antfu' },
  ]
}]
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
        <div class="vp-doc" flex flex-col items-center mt-10>
          <h2 id="meet-the-team" op50 font-normal p="t-10 b-2">
            Special Thanks
          </h2>
          <div m-auto p-10>
            <VPTeamMembers size="medium" :members="SpecialMembers" />
          </div>
          <p class="text-center opacity-75">
            <a href="https://www.netlify.com" rel="noopener noreferrer">
              <img src="https://vitest.dev/netlify.svg" alt="Deploys by Netlify" width="114" height="151">
            </a>
          </p>
        </div>
      </main>
    </div>
</div>
</template>
