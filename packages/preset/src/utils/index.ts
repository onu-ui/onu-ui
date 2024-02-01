export function spliteSpace(str: string) {
  return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
}

export function spliteObject(obj: Record<string, string>) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, spliteSpace(v)]))
}
