---
title: o-checkbox
lang: en-US
---

# o-checkbox 多选框

## 介绍

多选框


## 演示

### 基本使用

:::demo 通过 `v-model` 绑定值实现勾选

checkbox/basic

:::

### 禁用

:::demo `disabled` 可以直接禁用

checkbox/disabled

:::


### 中间状态样式

:::demo 通过 `indeterminate` 设置中间状态，只负责样式控制

checkbox/indeterminate

:::

### 自定义勾选值

:::demo `true-label` 与 `false-label` 可以设置自定义勾选值

checkbox/custom-label

:::



## Props

### checkbox-props

| 名称              | 类别                          | 默认值     | 说明             |
|-----------------|-----------------------------|---------|----------------|
| modelValue      | `Boolean / String / Number` | `-`     | 绑定值            |
| name            | `String`                    | `-`     | 原生 `name` 属性   |
| disabled        | `Boolean`                   | `false` | 禁用             |
| indeterminate   | `Boolean`                   | `false` | 设置中间状态，只负责样式控制 |
| true-label      | `Boolean / String / Number` | `-`     | 自定义勾选时值        |
| false-label     | `Boolean / String / Number` | `-`     | 自定义取消勾选时值      |


## Emits

### checkbox-emit

| 名称             | 参数                                           | 说明               |
|----------------|----------------------------------------------|------------------|
| change         | 变化后的值，当设置了 `true-label` 和 `false-label` 时返回对应值 | 绑定值变化时的事件 |




