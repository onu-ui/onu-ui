import parserCSS from 'prettier/plugins/postcss'
import prettier from 'prettier/standalone'

export function formatCSSCode(code: string) {
  return prettier.format(code, {
    parser: 'css',
    plugins: [parserCSS],
  })
}
