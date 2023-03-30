<template>
  <div fscw gap-2>
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
</template>
