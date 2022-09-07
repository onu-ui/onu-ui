<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button o="secondary">
        <template #icon>
          <div i-carbon-share />
        </template>
      </o-button>
      <o-button o="success" rounded-full>
        <template #icon>
          <div i-carbon-logo-wechat />
        </template>
      </o-button>
      <o-button o="error" rounded-full>
        <template #icon>
          <div i-carbon-music />
        </template>
      </o-button>
    </div>
    <div fscw gap-2>
      <o-button o="secondary">
        <template #icon>
          <div i-carbon-share />
        </template>
        Share
      </o-button>
      <o-button o="success">
        <template #icon>
          <div i-carbon-logo-wechat />
        </template>
        WeChat
      </o-button>
      <o-button o="error">
        <template #icon>
          <div i-carbon-music />
        </template>
        Music
      </o-button>
    </div>
  </div>
</template>
