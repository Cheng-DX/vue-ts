import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import AutoImportComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { presets as composablesPresets } from '@chengdx/composables'
import { presets as naiveuiPresets } from '@chengdx/naive-ui'

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
        composablesPresets,
        naiveuiPresets,
      ],
      dirs: [
        'src/composables/**',
      ],
    }),
    AutoImportComponents({
      dts: true,
      extensions: ['vue', 'ts', 'tsx'],
      dirs: [],
      importPathTransform: path => path.replace(/\.[tj]sx?$/, ''),
      resolvers: [
        NaiveUiResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
