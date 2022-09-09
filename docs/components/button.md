---
title: Button
lang: en-US
---

# Button

Commonly used button.

## Basic usage

Use `o` and `light` to define Button's style.

<demo src="../example/button/basic.vue"></demo>

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

<demo src="../example/button/disable.vue"></demo>

## Rounded Button

Use `rounded-full` or `rounded="full"` attribute to define a rounded Button

<demo src="../example/button/round.vue"></demo>

## Link Button

Use `to` attribute to specify the jump link.

<demo src="../example/button/link.vue"></demo>

## Text Button

Use `text` to define Button's text style. Buttons without border and background.

<demo src="../example/button/text.vue"></demo>

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

Use the `icon` slots to add icon.

<demo src="../example/button/icon.vue"></demo>

## Button Group

TODO

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

<demo src="../example/button/loading.vue"></demo>

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `xs`, `sm`,`md`,`lg`.

<demo src="../example/button/size.vue"></demo>

## Button Attributes

| Attribute         | Description                                                     | Type                                   | Accepted Values                                               | Default |
| ----------------- | --------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------- | ------- |
| size              | button size                                                     | string                                 | xs / sm / md / lg                                        | md      |
| o              | button type                                                     | string                                 | primary / secondary / success / warning / error / info  | —       |
| light             | determine whether it's a light button                           | boolean                                | —                                                             | false   |
| text              | determine whether it's a text button                            | boolean                                | —                                                             | false   |
| to              | determine whether it's a link button                            | String                                | —                                                             |   —   |
| rounded             | determine whether it's a round button                           | String                                | —                                                             | ''   |
| loading           | determine whether it's loading                                  | boolean                                | —                                                             | false   |
| disabled          | disable the button                                              | boolean                                | —                                                             | false   |

## Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| —       | customize default content   |
| icon    | customize icon component    |
