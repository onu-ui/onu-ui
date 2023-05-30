---
title: Checkbox
lang: en-US
---

# Checkbox <update-badge/>


Checkboxes are used to select or deselect a value.


## Basic usage

`v-model` binding value
<demo src="../example/checkbox/basic.vue"></demo>

## Disabled

Disabled state for checkbox.
<demo src="../example/checkbox/disabled.vue"></demo>

## Size

The Checkbox accepts `md` and `lg` properties to change its size.

<demo src="../example/checkbox/size.vue"></demo>

## Custom Checkbox

You can define the `icon` property to customize the checkbox's icon.

<demo src="../example/checkbox/custom.vue"></demo>

## Checkbox Group

Suitable for choosing from mutually exclusive options.

Combine `o-checkbox-group` with `o-checkbox` to display a `Checkbox` group. Bind a variable with v-model of the o-checkbox-group element and set the label value in o-checkbox. It also provides the change event with the current value as its parameter.

<demo src="../example/checkbox/group.vue"></demo>

## Checkbox Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue / v-model | `boolean` \| `string` \| `number` | `undefined` | Binding value. |
| name | `string` | `undefined` | Native 'name' attribute. |
| size | `'md' \| 'lg'` | `md` | Checkbox's size. |
| icon | `string` | `i-carbon-checkmark` | Customize icon's name. |
| disabled | `boolean` | `false` | Whether the Checkbox is disabled. |
|label |	`string`	| `undefined` |	Checkbox label. |






