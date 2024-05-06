<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <div class="theme-green">
    <!-- <VitePwaManifest /> -->
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <NuxtErrorBoundary />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
