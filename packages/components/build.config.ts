import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./index'],
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['unocss'],
})
