import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'public',
    'node_modules',
    'playground/*',
    'example/*',
    'docs/*',
  ],
  rules: {
    'pnpm/yaml-enforce-settings': 'off',
    'vue/block-tag-newline': 'off',
    'vue/padding-line-between-blocks': 'off',
  },
})
