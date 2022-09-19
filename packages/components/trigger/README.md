# Trigger

Used to add hover, click, focus and other events to the element, and pop up a dropdown.

## Usage

```html
<o-trigger position="top-right">
  <span>Hover Me</span>
  <template #content>
    <div class="p-3 w-20 bg-light-50 rounded-md shadow-md">Test Content</div>
  </template>
</o-trigger>
<o-trigger trigger="click">
  <o-button o="primary"> Click Me </o-button>
  <template #content>
    <div class="demo-basic">Test Content</div>
  </template>
</o-trigger>
<o-trigger trigger="focus">
  <input placeholder="Focus on me" />
  <template #content>
    <div class="demo-basic">Test Content</div>
  </template>
</o-trigger>
```
## `<trigger>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|popup-visible **(v-model)**|Whether the popup is visible|`boolean`|`-`|
|default-popup-visible|Whether the popup is visible by default (uncontrolled mode)|`boolean`|`false`|
|trigger|Trigger method|`'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'`|
|position|Popup position|`'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right' \| 'left' \| 'left-top' \| 'left-bottom' \| 'right' \| 'right-left' \| 'right-bottom'`|`'bottom'`|
|disabled|Whether the trigger is disabled|`boolean`|`false`|
|popup-offset|The offset of the popup (the offset distance of the popup from the trigger)|`number`|`0`|
|popup-translate|The moving distance of the popup|`TriggerPopupTranslate`|`-`|
|show-arrow|Whether the popup shows an arrow|`boolean`|`false`|
|align-point|Whether the popup follows the mouse|`boolean`|`false`|
|content-style|The style of the popup content|`CSSProperties`|`-`|
|arrow-style|The style of the popup arrow|`CSSProperties`|`-`|
|popup-style|The style of the popup|`CSSProperties`|`-`|
|animation-name|The name of the popup animation|`string`|`'fade-in'`|
|duration|The duration of the popup animation|`number\| {    enter: number;    leave: number;  }`|`-`|
|mouse-enter-delay|Delay trigger time of mouseenter event (ms)|`number`|`100`|
|mouse-leave-delay|Delay trigger time of mouseleave event (ms)|`number`|`100`|
|focus-delay|Delay trigger time of focus event (ms)|`number`|`0`|
|auto-fit-popup-width|Whether to set the width of the popup to the width of the trigger|`boolean`|`false`|
|popup-container|Mount container for popup|`string \| HTMLElement`|`-`|
### `<trigger>` Events

|Event Name|Description|Parameters|version|
|---|---|---|:---|
|popup-visible-change|Emitted when the status of the popup changes|visible: `boolean`||
|show|Triggered after the trigger is shown (the animation ends)|-|2.18.0|
|hide|Triggered after the popup is hidden (the animation ends)|-|2.18.0|
### `<trigger>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|content|Popup content|-|

