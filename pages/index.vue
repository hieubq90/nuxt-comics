<script lang="ts" setup>
const { $comicsClient } = useNuxtApp()

const genres = $comicsClient.genres.get.useQuery(['genres'])

</script>

<template>
  <div class="max-w-6xl mx-auto py-5 px-3">
    <span v-if="genres.isLoading.value">LOADING</span>
    <p v-else>{{ JSON.stringify(genres.data.value?.body) }}</p>
  </div>
</template>