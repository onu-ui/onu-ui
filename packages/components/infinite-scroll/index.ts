import type { App } from 'vue'
import type { SFCWithInstall } from '@onu-ui/utils'
import InfiniteScroll from './src'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll

export const PrivateInfiniteScroll = _InfiniteScroll
