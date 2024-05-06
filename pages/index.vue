<script lang="ts" setup>
const { $comicsClient } = useNuxtApp()

const genres = $comicsClient.genres.get.useQuery(['genres'])
</script>

<template>
  <main class="mx-auto max-w-6xl px-3 py-5">
    <svg-loading-icon />
    <p>
      {{ JSON.stringify(genres.data.value?.body) }}
    </p>
    <span class="font-baloo2">Baloo 2</span>
    <span class="font-quicksand">Quicksand</span>
    <UiButton>
      My Button
    </UiButton>
  </main>
</template>
