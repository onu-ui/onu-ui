export interface Component {
  name: string
  description: string
  link: string
  icon?: string
}

export interface ComponentListItem {
  name: string
  components: Component[]
}
