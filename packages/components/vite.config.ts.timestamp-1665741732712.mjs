// vite.config.ts
import { resolve } from "path";
import Vue from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/@vitejs+plugin-vue@3.1.2_vite@3.1.8+vue@3.2.40/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJSX from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.0.1_vite@3.1.8+vue@3.2.40/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/vite@3.1.8_sass@1.55.0/node_modules/vite/dist/node/index.js";
import UnoCSS from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/unocss@0.45.29_vite@3.1.8/node_modules/unocss/dist/vite.mjs";
import VueSetupExtend from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@3.1.8/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import dts from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/vite-plugin-dts@1.6.6_vite@3.1.8/node_modules/vite-plugin-dts/dist/index.mjs";
import AutoImport from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/unplugin-auto-import@0.11.2_@vueuse+core@9.3.0/node_modules/unplugin-auto-import/dist/vite.js";
import fs from "file:///Users/zhongan/Documents/Github/onu-ui/node_modules/.pnpm/fs-extra@10.1.0/node_modules/fs-extra/lib/index.js";
var __vite_injected_original_dirname = "/Users/zhongan/Documents/Github/onu-ui/packages/components";
var config = void 0;
var vite_config_default = defineConfig({
  build: {
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
    dts({}),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhvbmdhbi9Eb2N1bWVudHMvR2l0aHViL29udS11aS9wYWNrYWdlcy9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvemhvbmdhbi9Eb2N1bWVudHMvR2l0aHViL29udS11aS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy96aG9uZ2FuL0RvY3VtZW50cy9HaXRodWIvb251LXVpL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZUpTWCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBmcyBmcm9tICdmcy1leHRyYSdcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cblxubGV0IGNvbmZpZzogUmVzb2x2ZWRDb25maWcgPSB1bmRlZmluZWQhXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdpbmRleC50cycpLFxuICAgICAgbmFtZTogJ0BvbnUtdWkvY29tcG9uZW50cycsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZSgpLFxuICAgIFZ1ZUpTWCgpLFxuICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgVW5vQ1NTKCksXG4gICAgZHRzKHtcbiAgICAgIC8vIGRlYnVnIG1vZGUgIGh0dHBzOi8vZ2l0aHViLmNvbS9xbWhjL3ZpdGUtcGx1Z2luLWR0cy9ibG9iL21haW4vUkVBRE1FLnpoLUNOLm1kIyVFNiU4OSU5MyVFNSU4QyU4NSVFNSU5MCU4RSVFNSU4NyVCQSVFNyU4RSVCMCVFNyVCMSVCQiVFNSU5RSU4QiVFNiU5NiU4NyVFNCVCQiVCNiVFNyVCQyVCQSVFNSVBNCVCMVxuICAgICAgLy8gc2tpcERpYWdub3N0aWNzOiBmYWxzZSxcbiAgICAgIC8vIGxvZ0RpYWdub3N0aWNzOiB0cnVlLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogWyd2dWUnLCAnQHZ1ZXVzZS9jb3JlJ10sXG4gICAgICBkdHM6ICdhdXRvLWltcG9ydHMuZC50cycsXG4gICAgfSksXG4gICAge1xuICAgICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWNvcHktc3R5bGUnLFxuICAgICAgYXBwbHk6ICdidWlsZCcsXG4gICAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgICBjb25maWdSZXNvbHZlZChfY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZyA9IF9jb25maWdcbiAgICAgIH0sXG4gICAgICBhc3luYyBjbG9zZUJ1bmRsZSgpIHtcbiAgICAgICAgY29uc3QgeyByb290LCBidWlsZCB9ID0gY29uZmlnXG4gICAgICAgIGNvbnN0IHsgb3V0RGlyIH0gPSBidWlsZFxuICAgICAgICBjb25zdCBzdHlsZUZpbGUgPSByZXNvbHZlKHJvb3QsIG91dERpciwgJ3N0eWxlLmNzcycpXG4gICAgICAgIGF3YWl0IGZzLmNvcHlGaWxlKFxuICAgICAgICAgIHN0eWxlRmlsZSxcbiAgICAgICAgICByZXNvbHZlKF9fZGlybmFtZSwgJy4uL29udS11aS9zcmMvc3R5bGUuY3NzJyksXG4gICAgICAgIClcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdXLFNBQVMsZUFBZTtBQUN4WCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxRQUFRO0FBUmYsSUFBTSxtQ0FBbUM7QUFZekMsSUFBSSxTQUF5QjtBQUU3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3BDLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixPQUFPO0FBQUEsSUFDUCxJQUFJLENBSUosQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sY0FBYztBQUFBLE1BQy9CLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNEO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxlQUFlLFNBQVM7QUFDdEIsaUJBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNLGNBQWM7QUFDbEIsY0FBTSxFQUFFLE1BQU0sTUFBTSxJQUFJO0FBQ3hCLGNBQU0sRUFBRSxPQUFPLElBQUk7QUFDbkIsY0FBTSxZQUFZLFFBQVEsTUFBTSxRQUFRLFdBQVc7QUFDbkQsY0FBTSxHQUFHO0FBQUEsVUFDUDtBQUFBLFVBQ0EsUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
