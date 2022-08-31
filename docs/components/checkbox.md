---
title: Checkbox
lang: en-US
---

# Checkbox

## Introduce

A group of options for multiple choices.


## Demo

### Basic usage

:::demo `v-model` binding value

checkbox/basic

:::

### Disabled

:::demo Disabled state for checkbox.

checkbox/disabled

:::


### Indeterminate

:::demo The indeterminate checked state of checkbox

checkbox/indeterminate

:::

### Custom check value

:::demo `true-label` and `false-label` can set custom check value

checkbox/custom-label

:::



## Props

### checkbox-props

| Attribute         | Type                        | Default   | Description             |
|-------------------|-----------------------------|-----------|----------------|
| modelValue        | `Boolean / String / Number` | `-`       | binding value            |
| name              | `String`                    | `-`       | native 'name' attribute  |
| disabled          | `Boolean`                   | `false`   | whether the Checkbox is disabled             |
| indeterminate     | `Boolean`                   | `false`   | The indeterminate checked state of checkbox |
| true-label        | `String / Number`           | `-`       | value of the Checkbox if it's checked        |
| false-label       | `String / Number`           | `-`       | value of the Checkbox if it's not checked      |


## Emits

### checkbox-emit

| Event Name       | Parameters                                                                                      | Description                              |
|------------------|-------------------------------------------------------------------------------------------------|------------------------------------------|
| change           | The changed value, returns the corresponding value when `true-label` and `false-label` are set  | triggers when the binding value changes  |




