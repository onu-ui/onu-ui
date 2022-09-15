---
title: Collapse
lang: en-US
---

# Collapse

## Introduce

Use Collapse to store contents.

## Basic usage

You can expand multiple panels

<demo src="../example/badge/basic.vue"></demo>

## Accordion

In accordion mode, only one panel can be expanded at once
Activate accordion mode using the accordion attribute.

## ExpandedNames
Privide the `Array` , which contains the names of the expanded panels. 
The expanded panel will be expanded when the component is mounted. 

## Custom title
Besides using the title attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.

## Collapse Props

| Attribute         | Description                               | Type                 | Accepted Values       | Default                  |
| ----------------- | ----------------------------------------- | ------------         | --------------------- | ------------------------ |
| value             | Display badge content                     | `string` \| `number` |                       |                          |
| max               | Greater than `${max}`, display `${max}+`. | `number`             |                       | `99`                     |
| dot               | Only a dot style                          | `boolean`            |                       | `false`                  |
| showZero          | Whether to display the number 0           | `boolean`            |                       | `false`                  |

## Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | Badge's content.            |


## CollapseItem Props
| Attribute         | Description                               | Type                 | Accepted Values       | Default                  |
| ----------------- | ----------------------------------------- | ------------         | --------------------- | ------------------------ |
| value             | Display badge content                     | `string` \| `number` |                       |                          |
| max               | Greater than `${max}`, display `${max}+`. | `number`             |                       | `99`                     |
| dot               | Only a dot style                          | `boolean`            |                       | `false`                  |
| showZero          | Whether to display the number 0           | `boolean`            |                       | `false`                  |


