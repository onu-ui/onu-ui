import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['./src/index'],
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: ['unocss'],
})
