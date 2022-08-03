import { cac } from 'cac'
import { version } from '../package.json'

export const name = 'onu-ui'

export async function startCli(cwd = process.cwd(), argv = process.argv) {
  const cli = cac(name)

  cli
    .command('[...patterns]', 'Glob patterns', {
      ignoreOptionDefaultValue: true,
    })
    .option('-o, --out-file <file>', 'Output file', {
      default: cwd,
    })
    .option('-c, --config [file]', 'Config file')
  //   .action(async (patterns: Array<string>, flags) => {
  //     Object.assign(options, {
  //       cwd,
  //       ...flags,
  //     })

  //     if (patterns)
  //       options.patterns = patterns

  //     await build(options)
  //   })

  cli.help()
  cli.version(version)

  // Parse CLI args without running the command to
  // handle command errors globally
  cli.parse(argv, { run: false })
  await cli.runMatchedCommand()
}
