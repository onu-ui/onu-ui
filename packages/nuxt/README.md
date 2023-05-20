<p align="center">
  <img src="https://raw.githubusercontent.com/imageList/imglist/master/img/logo.svg" style="width:100px;" />
  <h1 align="center">Onu UI Nuxt Module</h1>
  <p align="center">Adds Onu components to Nuxt3.</p>
</p>

## Setup
1. Add `@onu-ui/nuxt` dependency to your project


```bash
pnpm i @onu-ui/nuxt -D
```

2. Add `@onu-ui/nuxt` to the `modules` section of `nuxt.config.ts`

```typescript
{
  export default defineNuxtConfig({
    // ...
    modules: [
      // ...
      '@onu-ui/nuxt'
    ],
    // ...
    css: [
      // ...
      'onu-ui/dist/style.css'
    ]
  })
}
```
