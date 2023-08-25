<template>
  <o-card title="ToolTip">
    <div space-y-2>
      <OCard title="Basic" description="Baisc Usage">
        <div fsc gap-2>
          <OToolTip content="Here is the text content">
            <o-button type="secondary">
              Hover
            </o-button>
          </OToolTip>
        </div>
      </OCard>
      <OCard title="Trigger" description="Trigger Types">
        <div fsc flex-wrap gap-2>
          <OToolTip>
            <o-button type="info">
              Hover
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip trigger="click">
            <o-button type="secondary">
              Click
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip trigger="context-menu">
            <o-button type="success">
              context-menu
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip trigger="focus">
            <o-button type="warning">
              focus
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
        </div>
      </OCard>
      <OCard title="Position" description="Different position">
        <div fsc flex-wrap gap-2>
          <OToolTip position="top-left">
            <o-button>
              top-left
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="top">
            <o-button>
              top
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="top-right">
            <o-button>
              top-right
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="bottom-left">
            <o-button>
              bottom-left
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="bottom">
            <o-button>
              bottom
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="bottom-right">
            <o-button>
              bottom-right
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="left-top">
            <o-button>
              left-top
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="left">
            <o-button>
              left
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="left-bottom">
            <o-button>
              left-bottom
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="right-top">
            <o-button>
              right-top
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="right">
            <o-button>
              right
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
          <OToolTip position="right-bottom">
            <o-button>
              right-bottom
            </o-button>
            <template #content>
              Here is the text content
            </template>
          </OToolTip>
        </div>
      </OCard>
      <OCard title="backgroundColor" description="Custom BackgroundColor">
        <div fsc gap-2>
          <OToolTip content="Here is the text content" background-color="#722ED1">
            <o-button type="secondary">
              backgroundColor
            </o-button>
          </OToolTip>
        </div>
      </OCard>
      <OCard title="Type" description="ToolTip Type">
        <div fsc gap-2>
          <OToolTip content="Here is the text content" type="Light">
            <o-button>
              Light
            </o-button>
          </OToolTip>
          <OToolTip content="Here is the text content" type="Dark">
            <o-button type="info">
              Dark
            </o-button>
          </OToolTip>
        </div>
      </OCard>
    </div>
  </o-card>
</template>
