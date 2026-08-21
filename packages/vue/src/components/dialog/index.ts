import DialogComponent from './index.vue'

const AlertDialog = { ...DialogComponent, name: 'AlertDialog' } as typeof DialogComponent

export const Dialog = DialogComponent
export { AlertDialog }
export default Dialog
