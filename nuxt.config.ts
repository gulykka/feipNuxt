// https://nuxt.com/docs/api/configuration/nuxt-config
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
        }],
    ]

})
