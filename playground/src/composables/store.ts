import { computed, ref, shallowRef } from 'vue'
import type * as defaultCompiler from 'vue/compiler-sfc'
import { File, type Store, type StoreState, compileFile } from '@vue/repl'
import playConfig from '../../playground.config'
import mainCode from '../template/main.vue?raw'
import welcomeCode from '../template/welcome.vue?raw'
import libInstallCode from '../template/lib-install.js?raw'
import { atou, utoa } from '~/utils/encode'
import { genCDNLink, genImportMap } from '~/utils/dependency'
import { type ImportMap, mergeImportMap } from '~/utils/import-map'
import {
  APP_FILE,
  IMPORT_MAP,
  IS_DEV,
  LIB_INSTALL,
  MAIN_FILE,
  USER_IMPORT_MAP,
} from '~/constants'
import { setVersion, setVueVersion } from '~/utils/versions'

export interface Initial {
  serializedState?: string
  versions?: Versions
  userOptions?: UserOptions
}
export type VersionKey = 'vue' | typeof playConfig.compLibShort | string
export type Versions = Record<VersionKey, string>
export interface UserOptions {
  styleSource?: string
  showHidden?: boolean
}
export type SerializeState = Record<string, string> & {
  _o?: UserOptions
}

export const useStore = (initial: Initial) => {
  // 版本
  const versions = reactive(
    initial.versions || { vue: 'latest', [playConfig.compLibShort]: IS_DEV ? `@${__COMMIT__}` : 'latest' },
  )
  // 编译器
  const compiler = shallowRef<typeof defaultCompiler>()
  // 用户配置
  const userOptions = ref<UserOptions>(initial.userOptions || {})
  // 是否隐藏
  const hideFile = computed<boolean>(
    () => !IS_DEV && !userOptions.value.showHidden,
  )
  // 根据 url 参数生成文件信息
  const files = initFiles(initial.serializedState || '')
  // 根据文件信息初始化 state，它将用于 vue-repl
  const state = reactive({
    mainFile: MAIN_FILE,
    files,
    activeFile: files[APP_FILE],
    errors: [],
    vueRuntimeURL: '',
    vueServerRendererURL: '',
    resetFlip: true,
  })
  // 初始化 store，它将用于 vue-repl
  const store = reactive<Store>({
    state,
    compiler: compiler as any,
    setActive,
    addFile,
    init,
    deleteFile,
    getImportMap,
    initialShowOutput: false,
    initialOutputMode: 'preview',
  })

  // 构建依赖
  const builtImportMap = computed<ImportMap>(() => genImportMap(versions))
  // 用户写入 import_map.json 的依赖
  const userImportMap = computed<ImportMap>(() => {
    const code = state.files[USER_IMPORT_MAP]?.code.trim()
    if (!code)
      return {}
    let map: ImportMap = {}
    try {
      map = JSON.parse(code)
    }
    catch (err) {
      console.error(err)
    }
    return map
  })

  // 合并构建依赖与用户写入 import_map.json 的依赖
  const importMap = computed<ImportMap>(() => {
    return mergeImportMap(builtImportMap.value, userImportMap.value)
  })
  // 监听 importMap, 生成file并修改state（state用于vue-repl）
  watch(
    () => importMap.value,
    (content) => {
      state.files[IMPORT_MAP] = new File(
        IMPORT_MAP,
        JSON.stringify(content, undefined, 2),
        hideFile.value,
      )
    },
    { immediate: true, deep: true },
  )

  // 监听组件库版本变化,
  // 重新编译 lib-install.js
  watch(
    () => versions[playConfig.compLibShort],
    (version) => {
      const file = new File(
        LIB_INSTALL,
        generateLibInstallCode(version).trim(),
        hideFile.value,
      )
      state.files[LIB_INSTALL] = file
      // 调用 vue-repl 编译
      compileFile(store, file)
    },
    { immediate: true },
  )
  // 获取组件库
  function generateLibInstallCode(version: string) {
    // 组件库样式文件 cdn link
    const style = genCDNLink(
      playConfig.compLibName,
      version,
      playConfig.coreDeps[playConfig.compLibName].cssPath,
      playConfig.cdnUrl.skypack,
    )

    // 替换 lib-install.js 的组件库 style 连接
    return libInstallCode.replace('#STYLE#', style)
  }

  async function init() {
    // 设置初始化 vue、组件库版本
    await setVueVersion(versions.vue, compiler, state, versions)
    // 编译文件
    watchEffect(() => compileFile(store, state.activeFile))
    Object.keys(state.files).forEach((file) => {
      compileFile(store, state.files[file])
    })
  }

  function serialize() {
    const state: SerializeState = { ...getFiles() }
    state._o = userOptions.value
    return utoa(JSON.stringify(state))
  }

  function deserialize(text: string): SerializeState {
    return JSON.parse(atou(text))
  }

  // 根据 url 参数生成文件信息
  function initFiles(serializedState: string) {
    const files: StoreState['files'] = {}
    if (serializedState) {
      const saved = deserialize(serializedState)
      for (const [filename, file] of Object.entries(saved)) {
        if (filename === '_o')
          continue
        files[filename] = new File(filename, file as string)
      }
      userOptions.value = saved._o || {}
    }
    else {
      files[APP_FILE] = new File(APP_FILE, welcomeCode)
    }
    files[MAIN_FILE] = new File(MAIN_FILE, mainCode, hideFile.value)
    if (!files[USER_IMPORT_MAP]) {
      files[USER_IMPORT_MAP] = new File(
        USER_IMPORT_MAP,
        JSON.stringify({ imports: {} }, undefined, 2),
      )
    }
    return files
  }

  function getFiles() {
    const exported: Record<string, string> = {}
    for (const file of Object.values(state.files)) {
      const fileInfo = file as {
        filename: string
        hidden: boolean
        code: string
      }
      if (fileInfo.hidden)
        continue
      exported[fileInfo.filename] = fileInfo.code
    }
    return exported
  }

  function addFile(fileOrFilename: string | File) {
    const file
      = typeof fileOrFilename === 'string'
        ? new File(fileOrFilename)
        : fileOrFilename
    state.files[file.filename] = file
    setActive(file.filename)
  }

  function deleteFile(filename: string) {
    if (filename === LIB_INSTALL)
      return

    if (confirm(`Are you sure you want to delete ${filename}?`)) {
      if (state.activeFile.filename === filename)
        setActive(APP_FILE)

      delete state.files[filename]
    }
  }

  function setActive(filename: string) {
    const file = state.files[filename]
    if (file.hidden)
      return
    state.activeFile = state.files[filename]
  }

  function getImportMap() {
    return importMap.value
  }

  return {
    ...store, // store 对象，内涵 vue-repl 配置
    versions, // 版本谢谢
    userOptions, // 用户配置
    init, // 初始化方法
    serialize,
    setVersion,
    compiler,
    state,
  }
}

export type ReplStore = ReturnType<typeof useStore>
