<template>
  <o-card title="Popup">
    <div space-y-2>
      <OCard title="Basic" description="Baisc Usage">
        <div fsc gap-2>
          <o-popup title="Title">
            <o-button o-secondary>
              Hover
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
        </div>
      </OCard>
      <OCard title="Trigger" description="Trigger Types">
        <div fsc flex-wrap gap-2>
          <o-popup title="Title">
            <o-button o-info>
              Hover
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup title="Title" trigger="click">
            <o-button o-secondary>
              Click
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup title="Title" trigger="context-menu">
            <o-button o-success>
              context-menu
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup title="Title" trigger="focus">
            <o-button o-warning>
              focus
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
        </div>
      </OCard>
      <OCard title="Position" description="Different position">
        <div fsc flex-wrap gap-2>
          <o-popup position="top-left">
            <o-button>
              top-left
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="top">
            <o-button>
              top
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="top-right">
            <o-button>
              top-right
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="bottom-left">
            <o-button>
              bottom-left
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="bottom">
            <o-button>
              bottom
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="bottom-right">
            <o-button>
              bottom-right
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="left-top">
            <o-button>
              left-top
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="left">
            <o-button>
              left
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="left-bottom">
            <o-button>
              left-bottom
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="right-top">
            <o-button>
              right-top
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="right">
            <o-button>
              right
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
          <o-popup position="right-bottom">
            <o-button>
              right-bottom
            </o-button>
            <template #content>
              <p>Here is the text content</p>
              <p>Here is the text content</p>
            </template>
          </o-popup>
        </div>
      </OCard>
    </div>
  </o-card>
</template>
