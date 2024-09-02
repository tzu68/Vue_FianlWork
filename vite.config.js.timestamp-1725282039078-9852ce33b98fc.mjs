// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/%E5%AD%B8%E7%BF%92/%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2/2024%20Vue%E6%96%B0%E6%89%8B%E7%8F%AD/FinalWork/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E5%AD%B8%E7%BF%92/%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2/2024%20Vue%E6%96%B0%E6%89%8B%E7%8F%AD/FinalWork/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/%E5%AD%B8%E7%BF%92/%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2/2024%20Vue%E6%96%B0%E6%89%8B%E7%8F%AD/FinalWork/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/%E5%AD%B8%E7%BF%92/%E5%85%AD%E8%A7%92%E5%AD%B8%E9%99%A2/2024%20Vue%E6%96%B0%E6%89%8B%E7%8F%AD/FinalWork/vite.config.js";
var vite_config_default = defineConfig({
  base: "/Vue_FianlWork/",
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTVCNzhcdTdGRDJcXFxcXHU1MTZEXHU4OUQyXHU1Qjc4XHU5NjYyXFxcXDIwMjQgVnVlXHU2NUIwXHU2MjRCXHU3M0VEXFxcXEZpbmFsV29ya1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU1Qjc4XHU3RkQyXFxcXFx1NTE2RFx1ODlEMlx1NUI3OFx1OTY2MlxcXFwyMDI0IFZ1ZVx1NjVCMFx1NjI0Qlx1NzNFRFxcXFxGaW5hbFdvcmtcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNSVBRCVCOCVFNyVCRiU5Mi8lRTUlODUlQUQlRTglQTclOTIlRTUlQUQlQjglRTklOTklQTIvMjAyNCUyMFZ1ZSVFNiU5NiVCMCVFNiU4OSU4QiVFNyU4RiVBRC9GaW5hbFdvcmsvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvVnVlX0ZpYW5sV29yay8nLFxuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZURldlRvb2xzKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVyxTQUFTLGVBQWUsV0FBVztBQUV6WSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKeUosSUFBTSwyQ0FBMkM7QUFPbE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFBQSxFQUM5QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
