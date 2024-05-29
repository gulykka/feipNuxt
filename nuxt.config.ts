// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
    devtools: {enabled: false},
    css: [
        '@/public/globals.sass'
    ],
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'Open Sans': [400, 700],
                Montserrat: true,
            }
        },
        ],
        'radix-vue/nuxt',
        'nuxt-swiper',
        'vue-yandex-maps/nuxt',
    ],
    yandexMaps: {
        apikey: process.env.YANDEX_MAPS_API_KEY
    }

})
