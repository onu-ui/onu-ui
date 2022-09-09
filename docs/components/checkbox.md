---
title: Checkbox
lang: en-US
---

# Checkbox

## Introduce

A group of options for multiple choices.


## Demo

### Basic usage

`v-model` binding value
<demo src="../example/checkbox/basic.vue"></demo>

### Disabled

Disabled state for checkbox.
<demo src="../example/checkbox/disabled.vue"></demo>


### Indeterminate

The indeterminate checked state of checkbox
<demo src="../example/checkbox/indeterminate.vue"></demo>

### Custom check value

`true-label` and `false-label` can set custom check value

<demo src="../example/checkbox/custom-label.vue"></demo>



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




