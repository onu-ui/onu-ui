import prettier from 'prettier/standalone'
import parserCSS from 'prettier/plugins/postcss'

export function formatCSSCode(code: string) {
  return prettier.format(code, {
    parser: 'css',
    plugins: [parserCSS],
  })
}
