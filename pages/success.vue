<template>
    <MainLayout>
        <section id="SuccessPage" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <article class="bg-white w-full p-6 min-h-[150px]">
                <div class="flex items-center text-xl">
                    <Icon name="clarity:success-standard-line" color="#5FCB04" size="35"/>
                    <h3 class="pl-4">Payment Successful</h3>
                </div>
                <p class="text-sm pl-[50px]">Thank you! We've received your payment.</p>
            </article>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 300)
})
</script>