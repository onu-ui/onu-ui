import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OPopup',
  props: {},
  emits: [],
  components: {},
  setup(_, { slots }) {
    return () => <div >{ slots.default?.()}</div>
  },
})
