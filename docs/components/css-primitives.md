---
outline: deep
---

# CSS primitives

These components are semantic HTML plus `@onu-ui/preset` shortcuts. They do not keep state or run component JavaScript.

## Forms

Use `label`, `textarea`, `select-native`, `field`, and `input-group` to compose native controls. Sizes use the existing `xs`, `sm`, `md`, and `lg` scale.

```html
<div field-group>
  <div field>
    <label class="label label-required" for="project">Project</label>
    <div input-group>
      <span input-group-addon>onu-ui/</span>
      <input id="project" value="components">
    </div>
    <p field-description>Choose a unique repository name.</p>
  </div>

  <div field>
    <label label for="kind">Type</label>
    <select id="kind" select-native>
      <option>Vue behavior</option>
      <option>Preset appearance</option>
    </select>
  </div>

  <div field>
    <label label for="description">Description</label>
    <textarea id="description" textarea placeholder="Describe the component…"></textarea>
    <p field-error>Example validation message.</p>
  </div>
</div>
```

<div field-group max-w-xl>
  <div field><label class="label label-required" for="docs-project">Project</label><div input-group><span input-group-addon>onu-ui/</span><input id="docs-project" value="components"></div><p field-description>Choose a unique repository name.</p></div>
  <div field><label label for="docs-kind">Type</label><select id="docs-kind" select-native><option>Vue behavior</option><option>Preset appearance</option></select></div>
  <div field><label label for="docs-description">Description</label><textarea id="docs-description" textarea placeholder="Describe the component…"></textarea><p field-error>Example validation message.</p></div>
</div>

## Items and navigation

`item` provides list-item anatomy. `breadcrumb` and `pagination` provide navigation appearance while native links and buttons keep their normal behavior.

```html
<nav breadcrumb aria-label="Breadcrumb">
  <a breadcrumb-link href="#">Components</a>
  <span breadcrumb-separator>/</span>
  <span breadcrumb-current aria-current="page">Preset</span>
</nav>

<button item-interactive type="button">
  <span item-media>◆</span>
  <span item-content>
    <span item-title>Preset primitives</span>
    <span item-description>Composable classes without runtime state.</span>
  </span>
</button>

<nav pagination aria-label="Pagination">
  <button pagination-item type="button">‹</button>
  <button class="pagination-item pagination-active" aria-current="page">1</button>
  <button pagination-item type="button">2</button>
</nav>
```

<div grid="~ gap-5" max-w-2xl>
  <nav breadcrumb aria-label="Breadcrumb"><a breadcrumb-link href="#">Components</a><span breadcrumb-separator>/</span><span breadcrumb-current aria-current="page">Preset</span></nav>
  <button item-interactive type="button"><span item-media>◆</span><span item-content><span item-title>Preset primitives</span><span item-description block>Composable classes without runtime state.</span></span><span item-actions>›</span></button>
  <nav pagination aria-label="Pagination"><button pagination-item type="button">‹</button><button class="pagination-item pagination-active" type="button" aria-current="page">1</button><button pagination-item type="button">2</button><span pagination-ellipsis>…</span><button pagination-item type="button">›</button></nav>
</div>

## Data and content

`progress` styles the native `<progress>` element. Table shortcuts preserve native table semantics. Aspect-frame and typography shortcuts are deliberately composable.

```html
<progress progress max="100" value="68">68%</progress>

<div table-wrap>
  <table table>
    <thead table-head>
      <tr table-row><th table-th>Package</th><th table-th>Status</th></tr>
    </thead>
    <tbody>
      <tr table-row><td table-td>@onu-ui/preset</td><td table-td>Stable</td></tr>
    </tbody>
  </table>
</div>

<figure aspect-frame-video>
  <img src="/logo.svg" alt="Onu UI">
</figure>
```

<div grid="~ gap-5" max-w-2xl>
  <progress progress max="100" value="68">68%</progress>
  <div table-wrap><table table><thead table-head><tr table-row><th table-th>Package</th><th table-th>Status</th></tr></thead><tbody><tr table-row><td table-td>@onu-ui/preset</td><td table-td>Stable</td></tr><tr table-row><td table-td>onu-ui</td><td table-td>Interactive</td></tr></tbody></table></div>
  <div><h3 typo-h3>CSS-first components</h3><p typo-p>Semantic HTML remains visible in the implementation.</p><p typo-muted mt-2>Use <code typo-code>aria-pressed</code> for toggle state.</p></div>
  <figure aspect-frame-video rounded-lg bg-muted><div grid place-items-center text-muted-foreground>16:9 aspect frame</div></figure>
</div>

## Toggle appearance

The `toggle` shortcut consumes state supplied by native or application markup. It does not own the state.

```html
<button toggle type="button" aria-pressed="true">Bold</button>
<button toggle-outline type="button" aria-pressed="false">Italic</button>
```

<div flex gap-2><button toggle type="button" aria-pressed="true">Bold</button><button toggle-outline type="button" aria-pressed="false">Italic</button></div>
