<template>
 <MainLayout>
   <section id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2 pt-12 sm:pt-0">
        <article class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
             <div v-if="products" v-for="product in products.data" :key="product">
                <ProductComponent :product="product"/>
            </div>
        </article>
    </section>
 </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

let products = ref(null)

onBeforeMount(async () => {
    products.value = await useFetch('/api/prisma/get-all-products')

    setTimeout(() => userStore.isLoading = false, 100)
})

</script>