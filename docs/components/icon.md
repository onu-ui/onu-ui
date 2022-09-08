---
title: Icon
lang: en-US
---

# Icon

Use **any** icons with Pure CSS for OnuUI.

For more icon information view [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

## Basic usage

Use the `name` attribute to define Icon. In addition,the `o` attribute can be used to set the color theme of the icon.

```html
<o-icon o-primary name="i-[icon-name]"></o-icon>
```

<demo src="../example/icon/basic.vue"></demo>

## Icon Collection

Get all icons, try on [icones](https://icones.js.org/)

![](https://raw.githubusercontent.com/antfu/icones/main/screenshots/2.png)
![](https://raw.githubusercontent.com/antfu/icones/main/screenshots/6.png)

## Icon Attributes

| Attribute | Description                | Type                           | Acceptable Value | Default                |
| --------- | -------------------------- | ------------------------------ | ---------------- | ---------------------- |
| o     | icon's theme color   | Pick\<CSSProperties, 'color'\> / primary / secondary / success / warning / error / info | -                | inherit from color     |
| name      | icon's name | String                 | -                | - |

## Icon Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
