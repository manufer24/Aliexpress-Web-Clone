<template>
  <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]"/>
  <NuxtPage />

  <MenuOverlay
    :class="[
        {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay },
        {'max-h-0 transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay },
    ]"
  />
</template>

<script setup>
import { useUserStore } from '~/stores/user';

useSeoMeta({
  title: 'Aliexpress Web Clone',
  ogTitle: 'Aliexpress Web Clone',
  description: 'This is a web practice similar to Aliexpress, you can test some of the e-commerce web. Have fun testing it.',
  ogDescription: 'This is a web practice similar to Aliexpress, you can test some of the e-commerce web. Have fun testing it.',
  ogImage: './public/home-page-aliexpress-clone.jpg',
  twitterCard: './public/home-page-aliexpress-clone.jpg',
})

const userStore = useUserStore()
const route = useRoute()

let windowWidth = ref(process.client ? window.innerWidth : '')

onMounted(() => {
    userStore.isLoading = false
    window.addEventListener('resize', function () {
        windowWidth.value = window.innerWidth;
    });
})

watch(() => windowWidth.value, () => {
    if (windowWidth.value >= 767) {
        userStore.isMenuOverlay = false
    }
})

watch(() => route.fullPath, () => {
    userStore.isLoading = true
})
</script>
