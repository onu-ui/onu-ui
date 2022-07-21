import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: ['./index'],
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
