import type { InjectionKey } from 'vue'

export interface TriggerContext {
  onMouseenter: (ev: MouseEvent) => void
  onMouseleave: (ev: MouseEvent) => void
  addChildRef: (ref: any) => void
  removeChildRef: (ref: any) => void
}

/** use for Nesting triggers */
export const triggerInjectionKey: InjectionKey<TriggerContext>
  = Symbol('OnuTrigger')
