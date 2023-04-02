<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button type="warning" icon="i-carbon-logo-github" />
      <o-button type="secondary">
        <template #icon>
          <div i-carbon-share />
        </template>
      </o-button>
      <o-button type="success" rounded-full>
        <template #icon>
          <div i-carbon-logo-wechat />
        </template>
      </o-button>
      <o-button type="error" rounded-full>
        <template #icon>
          <div i-carbon-music />
        </template>
      </o-button>
    </div>
    <div fscw gap-2>
      <o-button type="warning" icon="i-carbon-logo-github">
        Github
      </o-button>
      <o-button type="secondary">
        <template #icon>
          <div i-carbon-share />
        </template>
        Share
      </o-button>
      <o-button type="success">
        <template #icon>
          <div i-carbon-logo-wechat />
        </template>
        WeChat
      </o-button>
      <o-button type="error">
        <template #icon>
          <div i-carbon-music />
        </template>
        Music
      </o-button>
    </div>
  </div>
</template>
