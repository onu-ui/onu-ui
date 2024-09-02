# Contributing Guide

Hi! We are really excited that you are interested in contributing to Onu UI. Before submitting your contribution, please make sure to take a moment and read through the following guide.

Refer also to https://github.com/antfu/contribute.

## Set up your local development environment

The Onu UI repository is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop and test Onu UI, follow these steps:

1. Fork the Onu UI repository to your own GitHub account and then clone it to your local environment.

2. Ensure you are using the latest Node.js LTS (>= 18.x).

3. Onu UI uses pnpm v9, if you are working on multiple projects with different versions of pnpm, it's recommended to enable [Corepack](https://github.com/nodejs/corepack) by running `corepack enable`.

4. Install dependencies: run `pnpm install --frozen-lockfile` from Onu UI's root folder.

## Development Workflow

If you are working on a new feature or bug, follow these steps:

1. Check out a branch where you can work and commit your changes:
```shell
git checkout -b my-new-branch-or-feature
```

2. Add the changes to the codebase.

3. Add new tests when adding new features or fixing bugs (not always necessary, but it's a good practice): you can reuse existing tests or create new ones in the `test` folder. Onu UI uses [Vitest](https://vitest.dev/) as the test runner.

4. Test locally your changes by running the exmaples in your local environment

5. Run `pnpm build` to build the packages: the examples will use the built packages

6. For examples:
  - `pnpm dev-preset`: to run the `@onu-ui/preset` supported examples
  - `pnpm dev-vue`: to run the `onu-ui` vue components examples

7. Run the tests: `pnpm test` and `pnpm typecheck`.

8. Commit and push your changes to your fork using conventional commits. Then, create a pull request to the `main` branch of the Onu UI repository:
```shell
git add .
git commit -m "feat: my new feature"
git push origin my-new-branch-or-feature
```

## Documentation

Onu UI documentation is built using [VitePress](https://vitepress.vuejs.org/),you can find the documentation in the `docs` folder: the documentation is written in Markdown and Vue components.

If you're working on fixing or enhancing the documentation, follow previous 1, 2 and 5 steps and then run `pnpm docs` to start the VitePress dev server.

Onu UI also have a package for the interactive documentation, can be found in the `interactive` folder. If you're working on fixing or enhancing the interactive documentation, follow previous 1, 2 and 5 steps and then run `pnpm interactive` to start the dev server.

Finally, commit your changes and create a pull request to the `main` branch of the Onu UI repository (check the previous step 8).

## CI errors

Sometimes when you push your changes to create a new pull request (PR), the CI can fail, but we cannot check the logs to see what went wrong.

If you are getting **Semantic Pull Request** error, please check the [Semantic Pull Request](https://www.conventionalcommits.org/en/v1.0.0/#summary) documentation.

You can run the following commands in your local environment to fix CI errors:
- `pnpm test` to run unit tests, maybe you also need to update snapshots: in that case you can run `pnpm test:update` script
- `pnpm typecheck` to run TypeScript checks run on CI
