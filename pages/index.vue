<script lang="ts" setup>
const { $comicsClient } = useNuxtApp()

const genres = $comicsClient.genres.get.useQuery(['genres'])
</script>

<template>
  <main class="mx-auto max-w-6xl px-3 py-5">
    <span v-if="genres.isLoading.value">LOADING</span>
    <p v-else>
      {{ JSON.stringify(genres.data.value?.body) }}
    </p>
  </main>
</template>
