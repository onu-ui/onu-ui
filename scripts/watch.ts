import chokidar from 'chokidar'
// 项目就算直接引用 onu-ui 下的 index.ts,但由于子包pkg指向的是打包后路径，导致报错
// 项目直接使用  from 'onu-ui',同上
// 开发时热更新思路，就是将 playground 的依赖指向本地，但是vite监听到子包变化(可能是子包pkg指向打包路径导致)
// TODO: 这里监听必须仔细考虑忽略对象，否则可能会很好性能
chokidar.watch('packages', {
  ignored: (path: string) => {
    if (/node_modules/.test(path))
      return true
    return false
  },
  atomic: true,
  followSymlinks: false,
}).on('change', async (path) => {
  // TODO: 判断监听目标，重新执行打包
  console.log(path)
})
