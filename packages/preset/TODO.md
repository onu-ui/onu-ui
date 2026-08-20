# ONU UI 组件边界与 TODO

`@onu-ui/preset` 只负责 CSS 外观：UnoCSS shortcuts、语义颜色、尺寸和 CSS 状态选择器。它不维护组件状态，不监听事件，也不实现焦点陷阱、浮层定位、键盘导航或异步流程。

## A. 纯 CSS 外观组件

这些组件可以直接由语义化 HTML、原生表单状态和 preset shortcuts 组成。

### 已实现

- [x] Avatar
- [x] Badge
- [x] Button / Button Group
- [x] Card
- [x] Checkbox（使用原生 `input:checked`）
- [x] Input
- [x] Radio（使用原生 `input:checked`）
- [x] Switch（使用原生 checkbox 状态）
- [x] Alert
- [x] Empty（shortcut 前缀为 `emptybox`，避免与 UnoCSS `empty` variant 冲突）
- [x] Kbd
- [x] Separator
- [x] Skeleton
- [x] Spinner

### 待实现

- [x] Label
- [x] Textarea
- [x] Native Select
- [x] Field / Field Group / Field Description / Field Error
- [x] Input Group
- [x] Item / List Item
- [x] Breadcrumb
- [x] Pagination 外观
- [x] Progress（使用原生 `progress`）
- [x] Table
- [x] Typography
- [x] Aspect Ratio
- [x] Toggle 外观（状态由 `aria-pressed`、`data-state` 或调用方提供）

## B. 需要 JavaScript 行为的组件

这些组件不能只靠 CSS 提供完整且可访问的行为。preset 后续最多提供消费 `data-state`、`aria-*` 等属性的外观 shortcuts；状态管理应由 Vue/headless 层或应用代码负责。

### 展开与选择

- [x] Accordion（Vue）
- [x] Collapsible（Vue）
- [x] Tabs（Vue）
- [x] Toggle Group（Vue）
- [x] Select（Vue 自定义下拉）
- [x] Combobox（Vue）
- [x] Command（Vue）
- [x] Input OTP（Vue）
- [x] Slider（Vue，保留原生 range 语义）

### 浮层与焦点管理

- [x] Dialog / Alert Dialog（Vue）
- [x] Drawer / Sheet（Vue）
- [x] Popover（Vue）
- [x] Hover Card（Vue）
- [x] Tooltip（Vue）
- [x] Dropdown Menu / Context Menu（Vue）
- [x] Menubar / Navigation Menu（Vue）

### 复杂交互与应用状态

- [x] Calendar / Date Picker（Vue）
- [x] Carousel（Vue）
- [x] Resizable（Vue）
- [x] Scroll Area（Vue）
- [x] Toast（Vue）
- [x] Data Table（Vue）
- [x] Sidebar（Vue）

## 实现准则

1. preset 源码不得引入 Vue composable、DOM 事件监听器或第三方交互 primitive。
2. 可由 `:hover`、`:focus-visible`、`:checked`、`:disabled`、`aria-*`、`data-state` 表达的视觉状态，可以实现为 CSS shortcut。
3. 涉及焦点移动、Escape 关闭、点击外部关闭、浮层定位、roving tabindex 或异步生命周期时，必须留在交互层。
4. 每个新增 shortcut 必须提供 example，并通过 UnoCSS 生成测试确认类名实际生效。
