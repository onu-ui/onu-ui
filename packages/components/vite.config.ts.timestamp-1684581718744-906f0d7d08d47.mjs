// vite.config.ts
import { resolve } from "node:path";
import Vue from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.8+vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJSX from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.1_vite@4.3.8+vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/vite@4.3.8_4oablbnzuoee4tfznruyytglaa/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/unocss@0.51.13_vite@4.3.8/node_modules/unocss/dist/vite.mjs";
import VueSetupExtend from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@4.3.8/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import AutoImport from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/unplugin-auto-import@0.16.0_@vueuse+core@10.1.2/node_modules/unplugin-auto-import/dist/vite.js";
import fs from "file:///Users/chris/projects/onu-ui/node_modules/.pnpm/fs-extra@11.1.1/node_modules/fs-extra/lib/index.js";
var __vite_injected_original_dirname = "/Users/chris/projects/onu-ui/packages/components";
var config = void 0;
var vite_config_default = defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "index.ts"),
      name: "@onu-ui/components"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [
    Vue(),
    VueJSX(),
    VueSetupExtend(),
    UnoCSS(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: "auto-imports.d.ts"
    }),
    {
      name: "vite-plugin-copy-style",
      apply: "build",
      enforce: "post",
      configResolved(_config) {
        config = _config;
      },
      async closeBundle() {
        const { root, build } = config;
        const { outDir } = build;
        const styleFile = resolve(root, outDir, "style.css");
        await fs.copyFile(
          styleFile,
          resolve(__vite_injected_original_dirname, "../onu-ui/src/style.css")
        );
      }
    }
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hyaXMvcHJvamVjdHMvb251LXVpL3BhY2thZ2VzL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaHJpcy9wcm9qZWN0cy9vbnUtdWkvcGFja2FnZXMvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hyaXMvcHJvamVjdHMvb251LXVpL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVnVlSlNYIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBWdWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuXG5sZXQgY29uZmlnOiBSZXNvbHZlZENvbmZpZyA9IHVuZGVmaW5lZCFcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC50cycpLFxuICAgICAgbmFtZTogJ0BvbnUtdWkvY29tcG9uZW50cycsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZSgpLFxuICAgIFZ1ZUpTWCgpLFxuICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgVW5vQ1NTKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3Z1ZScsICdAdnVldXNlL2NvcmUnXSxcbiAgICAgIGR0czogJ2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcbiAgICB7XG4gICAgICBuYW1lOiAndml0ZS1wbHVnaW4tY29weS1zdHlsZScsXG4gICAgICBhcHBseTogJ2J1aWxkJyxcbiAgICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICAgIGNvbmZpZ1Jlc29sdmVkKF9jb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gX2NvbmZpZ1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGNsb3NlQnVuZGxlKCkge1xuICAgICAgICBjb25zdCB7IHJvb3QsIGJ1aWxkIH0gPSBjb25maWdcbiAgICAgICAgY29uc3QgeyBvdXREaXIgfSA9IGJ1aWxkXG4gICAgICAgIGNvbnN0IHN0eWxlRmlsZSA9IHJlc29sdmUocm9vdCwgb3V0RGlyLCAnc3R5bGUuY3NzJylcbiAgICAgICAgYXdhaXQgZnMuY29weUZpbGUoXG4gICAgICAgICAgc3R5bGVGaWxlLFxuICAgICAgICAgIHJlc29sdmUoX19kaXJuYW1lLCAnLi4vb251LXVpL3NyYy9zdHlsZS5jc3MnKSxcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1UsU0FBUyxlQUFlO0FBQzFWLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sUUFBUTtBQVBmLElBQU0sbUNBQW1DO0FBWXpDLElBQUksU0FBeUI7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFVBQVU7QUFBQSxNQUNwQyxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQy9CLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxlQUFlLFNBQVM7QUFDdEIsaUJBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNLGNBQWM7QUFDbEIsY0FBTSxFQUFFLE1BQU0sTUFBTSxJQUFJO0FBQ3hCLGNBQU0sRUFBRSxPQUFPLElBQUk7QUFDbkIsY0FBTSxZQUFZLFFBQVEsTUFBTSxRQUFRLFdBQVc7QUFDbkQsY0FBTSxHQUFHO0FBQUEsVUFDUDtBQUFBLFVBQ0EsUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
