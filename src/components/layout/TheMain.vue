<script setup>
import { KeepAlive } from 'vue'
import { isKeepAlive } from '~/stores/configs'
</script>

<template>
  <n-layout-content
    style="height: calc(100% - 60px)"
    content-style="padding: 20px"
  >
    <KeepAlive v-if="isKeepAlive">
      <RouterView />
    </KeepAlive>
    <RouterView v-else />
  </n-layout-content>
</template>

