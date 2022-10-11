import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportTypes from 'unplugin-auto-import-types/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dirs: [
        'src/composables/**',
      ],
    }),
    AutoImportTypes(),
    AutoImportComponents({
      dts: true,
      extensions: ['vue', 'ts', 'tsx'],
      dirs: [],
      importPathTransform: path => path.replace(/\.[tj]sx?$/, ''),
      resolvers: [
        NaiveUiResolver(),
      ],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
