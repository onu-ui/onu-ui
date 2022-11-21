import type { ExtractPropTypes } from 'vue'

export const emptyProps = {
  image: {
    type: String,
    default: '',
  },
  imgSize: Number,
  description: {
    type: String,
    default: '',
  },
}

export type OEmptyProps = ExtractPropTypes<typeof emptyProps>
