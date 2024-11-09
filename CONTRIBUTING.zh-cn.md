> [English](./CONTRIBUTING.md) | 简体中文

# 贡献指南

你好！我们非常高兴你有兴趣为 Onu UI 做出贡献。在提交你的贡献之前，请花点时间阅读以下指南。

另请参阅 https://github.com/antfu/contribute。

## 贡献组件

### UnoCSS Preset
Onu 组件库提供了一套纯 UnoCSS 预设， 请参阅`packages/preset`

贡献新组件时，在 `src/shortcuts` 中开始你的新组件开发，请尽情参考其它组件实现，确保你的组件符合 UnoCSS 的设计原则。

为了确保组件的灵活性，我们在 `preflight` 中提供了主题样式，你可以使用 `o-theme-*` 类来设置组件的主题上下文，例如 `text-context` 便使用主题的文本颜色。
同理 `o-radius-*` 便使用主题的圆角。

### Vue Components

Onu 同时对 `@onu-ui/preset` 进行了 Vue 组件的封装，你可以在 `packages/vue` 中找到。

`packages/vue` 中有组件模板，你可以复制模板进行快速启动新组件的开发。

请尽情参考其它组件实现，确保你的组件符合 Vue/UnoCSS 组件的设计原则。

## 设置本地开发环境

Onu UI 仓库是一个使用 pnpm 工作区的 monorepo。用于安装和链接依赖项的包管理器必须是 [pnpm](https://pnpm.io/)。

要开发和测试 Onu UI，请按照以下步骤操作：

1. 将 Onu UI 仓库 fork 到你自己的 GitHub 账户，然后克隆到你的本地环境。

2. 确保你使用的是最新的 Node.js LTS (>= 18.x)。

3. Onu UI 使用 pnpm 包管理器，请参阅根目录 `package.json` 中的 `packageManager` 字段。如果你在多个项目中使用不同版本的 pnpm，建议通过运行 `corepack enable` 启用 [Corepack](https://github.com/nodejs/corepack)。

4. 安装依赖项：在 Onu UI 的根文件夹中运行 `pnpm install --frozen-lockfile`。

## 开发工作流程

如果你正在开发新功能或修复 bug，请按照以下步骤操作：

1. 检出一个分支，在该分支上工作并提交你的更改：
```shell
git checkout -b my-new-branch-or-feature
```

2. 将更改添加到代码库。

3. 添加新功能或修复 bug 时添加新测试（不总是必要，但这是一个好习惯）：你可以重用现有测试或在 `test` 文件夹中创建新测试。Onu UI 使用 [Vitest](https://vitest.dev/) 作为测试运行器。

4. 在本地环境中运行示例以测试你的更改。

5. 运行 `pnpm build` 构建包：示例将使用构建的包。

6. 对于示例：
  - `pnpm dev-preset`：运行 `@onu-ui/preset` 支持的示例。（Alias `pnpm dev`，支持 HMR）
  - `pnpm dev-vue`：运行 `onu-ui` vue 组件示例

7. 运行测试：`pnpm test` 和 `pnpm typecheck`。

8. 使用规范提交将你的更改提交并推送到你的 fork。然后，创建一个 pull request 到 Onu UI 仓库的 `main` 分支：
```shell
git add .
git commit -m "feat: my new feature"
git push origin my-new-branch-or-feature
```

## 文档

Onu UI 文档使用 [VitePress](https://vitepress.vuejs.org/) 构建，你可以在 `docs` 文件夹中找到文档：文档是用 Markdown 和 Vue 组件编写的。

如果你正在修复或增强文档，请按照前面的 1、2 和 5 步骤操作，然后运行 `pnpm docs` 启动 VitePress 开发服务器。

Onu UI 还有一个用于组件案例的包，可以在 `examples/vite-onu-preset-only` 文件夹中找到。如果你正在修复或增强交互式文档，请按照前面的 1、2 和 5 步骤操作，然后运行 `pnpm example` 启动开发服务器。

最后，提交你的更改并创建一个 pull request 到 Onu UI 仓库的 `main` 分支（请参阅前面的第 8 步）。

## CI 错误

有时，当你推送更改以创建新的 pull request (PR) 时，CI 可能会失败，但我们无法检查日志以查看出了什么问题。

如果你收到 **Semantic Pull Request** 错误，请查看 [Semantic Pull Request](https://www.conventionalcommits.org/en/v1.0.0/#summary) 文档。

你可以在本地环境中运行以下命令来修复 CI 错误：
- `pnpm test` 运行单元测试，可能还需要更新快照：在这种情况下，你可以运行 `pnpm test:update` 脚本
- `pnpm typecheck` 运行 CI 上的 TypeScript 检查
