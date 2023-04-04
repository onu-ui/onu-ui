---
title: Icon
lang: en-US
---

# Icon

Icon are used to any icons with Pure CSS for OnuUI.

Use **any** icons with Pure CSS for OnuUI.

For more icon information view [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

## Basic usage

Use the `name` attribute to define Icon. In addition, the `o` attribute can be used to set the color theme of the icon.

```html
<o-icon o-primary name="i-[icon-name]"></o-icon>
```

<demo src="../example/icon/basic.vue"></demo>

## Icon Collection

Get all icons, try on [icones](https://icones.js.org/)

![](https://raw.githubusercontent.com/antfu/icones/main/screenshots/2.png)
![](https://raw.githubusercontent.com/antfu/icones/main/screenshots/6.png)

## Icon Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` | `undefined` | Icon's name. |
| o | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `undefined` | Inherit from color. |


## Icon Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content |
