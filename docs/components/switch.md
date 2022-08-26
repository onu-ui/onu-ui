---
title: o-switch
lang: en-US
---

# Switch

## 介绍

Mutually exclusive operation controls, users can turn on or turn off a certain function.


## 演示

### 基本使用

:::demo 内置了三种尺寸，通过 `size` 设置

switch/basic

:::

### 禁用

:::demo `disabled` 可以直接禁用

switch/disabled

:::


### 载入状态的开关
:::warning

注意：传入 `isLoading` 后，该 `Switch` 会变成禁用

:::

:::demo 通过 `isLoading` 来把它变成载入

switch/loading

:::

### 自定义开启与关闭状态

:::demo 自定义的开启 `checkedValue` 与关闭 `unCheckedValue`

switch/status

:::

### 自定义开启与关闭状态渲染内容

:::demo 你也可以通过插槽去实现 `checked` 与 `unchecked` 的渲染内容

switch/render

:::



## Props

### switch-props

| 名称             | 类别                           | 默认值     | 说明                                |
|----------------|--------------------------------|-----------|-----------------------------------|
| modelValue     | `Boolean / String / Number`    | `-`       | 绑定值                               |
| size           | `String`                       | `default` | 尺寸 `'small' / 'default'/ 'large'` |
| disabled       | `Boolean`                      | `false`   | 禁用                                |
| isLoading       | `Boolean`                     | `false`   | 载入                                |
| checkedValue   | `Boolean / String / Number`    | `-`       | 指定开启时的值                           |
| unCheckedValue | `Boolean / String / Number`    | `-`       | 指定关闭时的值                           |


## Emits

### switch-emit

| 名称             | 参数                                                                                                                 | 说明               |
|----------------|--------------------------------------------------------------------------------------------------------------------|------------------|
| change         | 参数是变化前后的值 `IChangeData = {newVal:Boolean / String / Number,oldVal:Boolean / String / Number}`参数是变化前后的值  | 绑定值变化时的事件        |
| click          | 事件对象 `event`                                                                                                       | 点击 `switch` 时的事件 |


## Slots

### switch-slot

| 名称        | 说明                    |  
|-----------|-----------------------|
| checked   | 指定开启时的渲染内容插槽  |
| unchecked | 指定关闭时的渲染内容插槽  |



