---
title: Radio
lang: en-US
---

# Radio <new-badge/>

Single selection among multiple options.

## Basic usage

`Radio` should not have many options. Otherwise, use the `Select` component instead.

Creating a radio component is easy, just bind a variable to `Radio`'s `v-model`. It equals to the value of `label` of the chosen radio. Labels can be a `String`, `Number` or `Boolean`.

<demo src="../example/radio/basic.vue"></demo>

## Disabled

The `disabled` attribute is used to disable the radio.

You just need to add the `disabled` attribute.

<demo src="../example/radio/disabled.vue"></demo>

## Radio button group

Suitable for choosing from mutually exclusive options.

Combine `o-radio-group` with `o-radio` to display a `Radio` group. Bind a variable with `v-model` of the `o-radio-group` element and set the label value in `o-radio`. It also provides the `change` event with the current value as its parameter.

<demo src="../example/radio/group.vue"></demo>

## With borders

The `border` attribute adds a border to `Radio`s.

<demo src="../example/radio/border.vue"></demo>

## Sizes

Besides the default size, `Radio` provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `xs`, `sm`, `md`, `lg`.

<demo src="../example/radio/size.vue"></demo>

## Colors

You can change the checked color with the `fill` prop.

<demo src="../example/radio/color.vue"></demo>

## Text Colors

You can individually set the color of the text with the `text-color` prop when the radio button is selected.

<demo src="../example/radio/text-color.vue"></demo>

## Label Colors

You can set the color of the label text with the `label-color` prop.

If you do not want label's color to change when selected, you can use the `not-text-color` prop.

<demo src="../example/radio/label-color.vue"></demo>

## Radio API

### Radio Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| model-value / v-model | `string \| number \| boolean` | `undefined` | Binding value. |
| label | `string` | `undefined` | The value of Radio. |
| disabled | `boolean` | `false` |  Whether Radio is disabled.  |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | The size of Radio.  |
| fill | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Change radio fill color. |
| text-color | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `undefined` | Change the label color when radio is checked. |
| label-color | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `undefined` | Change radio label color. |
| not-text-color | `boolean` | `false` | Disable text discoloration when radio is activated. |
| border | `boolean` | `false` | Whether to add a border around Radio. |
| name | `string` | `undefined` | Native `name` attribute. |

### Radio Methods
| Name | Parameters | Description | 
| --- | --- | --- |
| change | `(value: string \| number \| boolean) => void` | Triggers when the bound value changes. |

### Radio Slots
| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |

## RadioGroup API

### RadioGroup Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| model-value / v-model | `string \| number \| boolean` | `undefined` | Binding value. |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | The size of radio buttons or bordered radios.  |
| disabled | `boolean` | `false` |  Whether the nesting radios are disabled.  |
| name | `string` | `undefined` | Native `name` attribute. |
| id | `string` | `undefined` | Native `id` attribute. |

### RadioGroup Methods
| Name | Parameters | Description | 
| --- | --- | --- |
| change | `(value: string \| number \| boolean) => void` | Triggers when the bound value changes. |

### RadioGroup Slots
| Name | Parameters | Description |
| --- | --- | --- |
| default | `Radio` | Customize default content. |
