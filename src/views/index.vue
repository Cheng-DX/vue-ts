<script setup lang="ts">
function send() {
  message.success('Hello world')
}
</script>

<template>
  <n-button @click="send">
    Click
  </n-button>
</template>

<style scoped>

</style>
