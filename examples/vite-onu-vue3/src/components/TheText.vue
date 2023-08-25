<script setup lang='ts'>

</script>

<template>
  <OCard title="Text">
    <div class="space-y-2">
      <div fsc gap-2 flex-wrap>
        <o-text>Default</o-text>
        <o-text type="primary">
          Primary
        </o-text>
        <o-text type="secondary">
          Secondary
        </o-text>
        <o-text type="success">
          Success
        </o-text>
        <o-text type="warning">
          Warning
        </o-text>
        <o-text type="error">
          Error
        </o-text>
        <o-text type="info">
          Info
        </o-text>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-text size="xs">
          XS
        </o-text>
        <o-text size="sm">
          SM
        </o-text>
        <o-text size="md">
          MD(Default)
        </o-text>
        <o-text size="lg">
          LG
        </o-text>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-text class="w-220px" truncated>
          If your text is too long, it will be omitted
        </o-text>
      </div>
      <div fsc gap-2 flex-wrap>
        <div fsc flex-col gap-2 flex-wrap>
          <o-text>span</o-text>
          <o-text tag="p">
            This is a paragraph.
          </o-text>
          <o-text tag="b">
            Bold
          </o-text>
          <o-text tag="i">
            Italic
          </o-text>
          <o-text>
            This is<o-text tag="sub" size="xs">
              subscript
            </o-text>
          </o-text>
          <o-text>
            This is<o-text tag="sup" size="xs">
              superscript
            </o-text>
          </o-text>
          <o-text tag="ins">
            Inserted
          </o-text>
          <o-text tag="del">
            Deleted
          </o-text>
          <o-text tag="mark">
            Marked
          </o-text>
        </div>
        <div fsc flex-col gap-2 flex-wrap>
          <o-text font="normal">
            span
          </o-text>
          <o-text font="block">
            This is a paragraph.
          </o-text>
          <o-text font="bold">
            Bold
          </o-text>
          <o-text font="italic">
            Italic
          </o-text>
          <o-text>
            This is<o-text font="sub" size="xs">
              subscript
            </o-text>
          </o-text>
          <o-text>
            This is<o-text font="sup" size="xs">
              superscript
            </o-text>
          </o-text>
          <o-text font="under">
            Inserted
          </o-text>
          <o-text font="del">
            Deleted
          </o-text>
          <o-text font="mark">
            Marked
          </o-text>
        </div>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-text>
          <o-icon name="i-logos:vitejs" />Onu-ui
        </o-text>
        <o-text>
          This is text mixed icon<o-icon name="i-logos:sketch" /> and component<o-button>Button</o-button>
        </o-text>
      </div>
      <div fsc gap-2 flex-wrap>
        <o-text font="bold" size="lg" gradient="linear-gradient(to right, #0c02ba, #00ff95)">
          ONU-UI
        </o-text>
      </div>
    </div>
  </OCard>
</template>
