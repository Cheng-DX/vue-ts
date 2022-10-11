import { NLayoutContent } from 'naive-ui'
import type { VNode } from 'vue'
import { KeepAlive } from 'vue'
import { RouterView } from 'vue-router'
import { isKeepAlive } from '~/stores/configs'

export default defineComponent({
  setup() {
    return () => h(NLayoutContent, {
      style: {
        height: 'calc(100% - 60px)',
      },
      contentStyle: 'padding: 20px',
    }, () => h(RouterView, null, {
      default: ({ Component }: { Component: VNode }) => [
        isKeepAlive.value ? h(KeepAlive, {}, () => Component) : Component,
      ],
    }))
  },
})
