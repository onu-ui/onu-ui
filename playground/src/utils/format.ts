import { OMessage as message } from 'onu-ui'
import type { OMessageProps } from 'onu-ui'
import type { Fn } from '@vueuse/core'
import type { BuiltInParserName } from 'prettier'
import type { ReplStore } from '~/composables/store'

export const formatCode = async (loadedFormat: boolean, store: ReplStore) => {
  let close: Fn | undefined
  if (!loadedFormat) {
    message({
      content: 'Loading Prettier...',
      type: 'info',
    } as OMessageProps)
  }
  // 加载依赖
  const [format, parserHtml, parserTypeScript, parserBabel, parserPostcss]
    = await Promise.all([
      import('prettier/standalone').then(r => r.format),
      import('prettier/parser-html').then(m => m.default),
      import('prettier/parser-typescript').then(m => m.default),
      import('prettier/parser-babel').then(m => m.default),
      import('prettier/parser-postcss').then(m => m.default),
    ])
  loadedFormat = true
  close?.()
  // 判断文件类型
  const file = store.state.activeFile
  let parser: BuiltInParserName
  if (file.filename.endsWith('.vue'))
    parser = 'vue'
  else if (file.filename.endsWith('.js'))
    parser = 'babel'
  else if (file.filename.endsWith('.ts'))
    parser = 'typescript'
  else if (file.filename.endsWith('.json'))
    parser = 'json'
  else
    return

  // 调用格式化方法
  file.code = format(file.code, {
    parser,
    plugins: [parserHtml, parserTypeScript, parserBabel, parserPostcss],
    semi: false,
    singleQuote: true,
  })
}

// 格式化交互
const loadedFormat = false
export const handleKeydown = (evt: KeyboardEvent, store: ReplStore) => {
  if ((evt.ctrlKey || evt.metaKey) && evt.code === 'KeyS') {
    evt.preventDefault()
    return
  }

  // NOTE: ctrl or alt + shift + f => format code
  if ((evt.altKey || evt.ctrlKey) && evt.shiftKey && evt.code === 'KeyF') {
    evt.preventDefault()
    formatCode(loadedFormat, store)
  }
}
