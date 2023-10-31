<template>
    <section id="AuthPage" class="w-full h-[100vh] bg-white">
        <article class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/AliExpress-logo.png" alt="aliexpres logo">
            </NuxtLink>
        </article>
        <article class="max-w-[400px] mx-auto px-2">
            <h2 class="text-center my-6">Login / Register</h2>

            <button 
                @click="login('google')"
                class="
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/google-logo.png" alt="Google logo">
                <h3>Google</h3>
            </button>

            <button 
                @click="login('github')"
                class="
                mt-4
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/github-logo.png" alt="GitHub logo">
                <h3>Github</h3>
            </button>
        </article>
    </section>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

watchEffect(() => {
    if (user.value) {
        return navigateTo('/')
    }
})

const login = async (prov) => {
    const { data, error } = await client.auth.signInWithOAuth({
        provider: prov,
        redirectTo: window.location.origin
    })
    }
</script>