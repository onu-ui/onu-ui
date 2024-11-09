> English | [简体中文](./CONTRIBUTING.zh-cn.md)

# Contribution Guide

Hi! We are really excited that you are interested in contributing to Onu UI. Before submitting your contribution, please make sure to take a moment and read through the following guide.

Also, see https://github.com/antfu/contribute.

## Contributing Components

### UnoCSS Preset
The Onu component library provides a pure UnoCSS preset. Please refer to `packages/preset`.

When contributing new components, start your new component development in `src/shortcuts`. Feel free to refer to other component implementations to ensure your component adheres to UnoCSS design principles.

To ensure the flexibility of the components, we provide theme styles in `preflight`. You can use the `o-theme-*` classes to set the component's theme context, such as `text-context` for using the theme's text color. Similarly, `o-radius-*` uses the theme's border radius.

### Vue Components

Onu also provides Vue component wrappers for `@onu-ui/preset`, which you can find in `packages/vue`.

There are component templates in `packages/vue` that you can copy to quickly start developing new components.

Feel free to refer to other component implementations to ensure your component adheres to Vue/UnoCSS component design principles.

## Setting Up Local Development Environment

The Onu UI repository is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop and test Onu UI, follow these steps:

1. Fork the Onu UI repository to your own GitHub account, then clone it to your local environment.

2. Ensure you are using the latest Node.js LTS (>= 18.x).

3. Onu UI uses the pnpm package manager. Refer to the `packageManager` field in the root `package.json`. If you use different versions of pnpm in multiple projects, it is recommended to enable [Corepack](https://github.com/nodejs/corepack) by running `corepack enable`.

4. Install dependencies: run `pnpm install --frozen-lockfile` in the root folder of Onu UI.

## Development Workflow

If you are developing a new feature or fixing a bug, follow these steps:

1. Check out a branch, work on it, and commit your changes:
```shell
git checkout -b my-new-branch-or-feature
```

2. Add changes to the codebase.

3. Add new tests when adding new features or fixing bugs (not always necessary, but a good practice): you can reuse existing tests or create new ones in the `test` folder. Onu UI uses [Vitest](https://vitest.dev/) as the test runner.

4. Run examples in your local environment to test your changes.

5. Run `pnpm build` to build the package: examples will use the built package.

6. For examples:
  - `pnpm dev-preset`: run examples supported by `@onu-ui/preset` (Alias `pnpm dev`, supports HMR).
  - `pnpm dev-vue`: run `onu-ui` Vue component examples.

7. Run tests: `pnpm test` and `pnpm typecheck`.

8. Commit your changes using conventional commits and push to your fork. Then, create a pull request to the `main` branch of the Onu UI repository:
```shell
git add .
git commit -m "feat: my new feature"
git push origin my-new-branch-or-feature
```

## Documentation

Onu UI documentation is built using [VitePress](https://vitepress.vuejs.org/). You can find the documentation in the `docs` folder: the documentation is written in Markdown and Vue components.

If you are fixing or enhancing the documentation, follow steps 1, 2, and 5 above, then run `pnpm docs` to start the VitePress development server.

Onu UI also has a package for component cases, which can be found in the `examples/vite-onu-preset-only` folder. If you are fixing or enhancing interactive documentation, follow steps 1, 2, and 5 above, then run `pnpm example` to start the development server.

Finally, commit your changes and create a pull request to the `main` branch of the Onu UI repository (see step 8 above).

## CI Errors

Sometimes, when you push changes to create a new pull request (PR), CI may fail, but we cannot check the logs to see what went wrong.

If you receive a **Semantic Pull Request** error, please refer to the [Semantic Pull Request](https://www.conventionalcommits.org/en/v1.0.0/#summary) documentation.

You can run the following commands in your local environment to fix CI errors:
- `pnpm test` to run unit tests, you may also need to update snapshots: in this case, you can run the `pnpm test:update` script.
- `pnpm typecheck` to run TypeScript checks as on CI.
