<template>
  <div grid="~ gap-6">
    <OCard title="Form composition" desc="Label、Textarea、Native Select、Field 与 Input Group 均为纯 CSS shortcuts。">
      <form field-group @submit.prevent>
        <div field>
          <label class="label label-required" for="preset-name">Project name</label>
          <div input-group>
            <span input-group-addon>onu-ui/</span>
            <input id="preset-name" value="components" aria-describedby="preset-name-help">
            <button input-group-button type="button" aria-label="Clear">
              ×
            </button>
          </div>
          <p id="preset-name-help" field-description>
            Choose a unique repository name.
          </p>
        </div>
        <div field>
          <label label for="preset-kind">Component type</label>
          <select id="preset-kind" select-native>
            <option>Vue behavior</option>
            <option>Preset appearance</option>
          </select>
        </div>
        <div field>
          <label label for="preset-description">Description</label>
          <textarea id="preset-description" textarea placeholder="Describe the component…" />
          <p field-error role="alert">
            Example validation message.
          </p>
        </div>
      </form>
    </OCard>

    <OCard title="Content and navigation" desc="Item、Breadcrumb、Pagination、Table 与 Typography。">
      <nav breadcrumb aria-label="Breadcrumb">
        <a breadcrumb-link href="#">Components</a><span breadcrumb-separator>/</span>
        <a breadcrumb-link href="#">Preset</a><span breadcrumb-separator>/</span>
        <span breadcrumb-current aria-current="page">Overview</span>
      </nav>
      <div mt-5 grid gap-2>
        <button item-interactive type="button">
          <span item-media><i i-carbon-cube /></span>
          <span item-content><span item-title>Preset primitives</span><span item-description block>Composable classes without runtime state.</span></span>
          <span item-actions>›</span>
        </button>
      </div>
      <div table-wrap mt-5>
        <table table>
          <thead table-head>
            <tr table-row>
              <th table-th>
                Package
              </th><th table-th>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr table-row>
              <td table-td>
                @onu-ui/preset
              </td><td table-td>
                Stable
              </td>
            </tr><tr table-row>
              <td table-td>
                onu-ui
              </td><td table-td>
                Interactive
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav pagination mt-5 aria-label="Pagination">
        <button pagination-item type="button">
          ‹
        </button><button class="pagination-item pagination-active" type="button" aria-current="page">
          1
        </button><button pagination-item type="button">
          2
        </button><span pagination-ellipsis>…</span><button pagination-item type="button">
          ›
        </button>
      </nav>
    </OCard>

    <OCard title="Progress, media, toggle and type" desc="原生状态和 aria/data 属性驱动外观。">
      <h3 typo-h3>
        CSS-first components
      </h3>
      <p typo-p>
        Semantic HTML remains visible in the implementation.
      </p>
      <p typo-muted mt-2>
        Use <code typo-code>aria-pressed</code> or <code typo-code>data-state</code> for toggle state.
      </p>
      <progress progress mt-5 max="100" value="68">
        68%
      </progress>
      <div mt-5 flex gap-2>
        <button toggle type="button" aria-pressed="true">
          Bold
        </button>
        <button toggle-outline type="button" aria-pressed="false">
          Italic
        </button>
      </div>
      <figure aspect-frame-video mt-5 rounded-lg bg-muted>
        <div grid place-items-center text-muted-foreground>
          16:9 aspect frame
        </div>
      </figure>
    </OCard>
  </div>
</template>
