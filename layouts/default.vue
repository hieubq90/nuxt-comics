<script lang="ts" setup>
const showFloatIcon = ref<boolean>(false)
const isReading = ref<boolean>(false)
const isLoading = ref<boolean>(true)
const loadingDiv = ref<HTMLDivElement>()

const route = useRoute()

onMounted(() => {
  isReading.value = !!route?.params?.chapterId
  document.addEventListener('scroll', () => {
    const heightOffset = document.documentElement.scrollTop
    showFloatIcon.value = heightOffset > 2000
  })
  isLoading.value = false
  setTimeout(() => {
    if (loadingDiv.value)
      loadingDiv.value.style.display = 'none'
  }, 1000)
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

watch(route, (route) => {
  isReading.value = !!route?.params?.chapterId
})
</script>

<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <slot />
  <div
    ref="loadingDiv" :class="`fixed z-50 inset-0 bg-white flex items-center justify-center duration-300 ${isLoading
      ? 'opacity-100 pointer-events-auto'
      : 'opacity-0 pointer-events-none'
    }`"
  >
    <svg-loading-icon />
  </div>
  <button
    :class="`fixed p-2 bottom-6 right-6 flex items-center justify-center aspect-square rounded-full shadow bg-gray-50 -rotate-45 duration-200 sm:bottom-6 sm:right-6 ${showFloatIcon
      ? 'opacity-1 pointer-events-auto'
      : 'opacity-0 pointer-events-none'
    }`" @click="scrollToTop"
  >
    <Icon name="fluent:rocket-20-regular" size="30" />
  </button>
  <!-- <Footer v-show="!isReading" /> -->
</template>
