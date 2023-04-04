---
title: Switch
lang: en-US
---

# Switch

Switch is a checkbox that is styled to look like a switch button.

## Basic usage

Use `o` variants to determine component colors.

<demo src="../example/switch/basic.vue"></demo>

## Light style

If you want to use the light style, set the `light` attribute to `true`.

<demo src="../example/switch/light.vue"></demo>

## Custom dot color

Don't like the theme color? `Switch` provides access to custom colors.

You can set the `o` variant to a custom active color. Set the `background-color` attribute to an unactive color.

<demo src="../example/switch/customColor.vue"></demo>

## Sizes

Besides the default size, `Switch` provides three additional sizes for you to choose among different scenarios.

Use the attribute `size` to set additional sizes with `sm`,`md`,`lg`.

<demo src="../example/switch/size.vue"></demo>

## Disabled

The `disabled` attribute determines if the switch is disabled.

Use the `disabled` attribute to determine whether a switch is disabled. `Switch` accepts a `Boolean` value.

<demo src="../example/switch/disabled.vue"></demo>

## Icon Slots

TODO

## Switch Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue / v-model | `boolean` | `false` | Binding value. |
| size | ` 'sm' \| 'md' \| 'lg'` | `'md'` | Switch size. |
| o | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Switch type. |
| light | `boolean` | `false` | Determine whether it's a light switch.     | boolean |
| disabled | `boolean` | `false` | Disable the switch. |
| background-color | `string` | `undefined` | Custom the switch dot or background color. |


