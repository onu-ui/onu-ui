import { getCurrentInstance } from 'vue'
import UnoUI from 'onu-ui'
let installed = false

export function libInstall() {
  if (installed)
    return
  const instance = getCurrentInstance()
  // 安装组件库到vue
  instance.appContext.app.use(UnoUI)
  installed = true
}

export async function init() {
  await loadStyle()
  await createInjectUnocss()
}

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '#STYLE#'
    link.id = 'lib_style'
    link.addEventListener('load', resolve)
    link.addEventListener('error', reject)
    document.body.append(link)
  })
}

export function createInjectUnocss() {
  return new Promise((resolve, reject) => {
    const style = document.createElement('style')
    style.id = 'unocss_style'
    style.addEventListener('load', resolve)
    style.addEventListener('error', reject)
    document.body.append(style)
  })
}

// 发送dom信息到 父页面
export function sendHtml() {
  const div = document.querySelector('#app').innerHTML
  top.postMessage(div, location.ancestorOrigins[0])
}

// 收父页面传来到 css
export function getUnocssCompileRes() {
  window.addEventListener('message', (event) => {
    const styleElm = document.querySelector('#unocss_style')
    if (styleElm)
      styleElm.innerHTML = event.data
  })
}
