import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'dist',
    'public',
    'es',
    'node_modules',
    'playground/*',
    'example/*',
    'docs/*',
  ],
  rules: {
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-sequences': 'off',
    'no-alert': 'off',
    'no-console': 'off',
    'antfu/no-import-dist': 'off',
    'ts/no-use-before-define': 'off',
    'ts/prefer-literal-enum-member': 'off',
    // TODO: remove it when ...
    'vue/require-toggle-inside-transition': 'off',
    ' @typescript-eslint/no-use-before-define': 'off',
  },
})
