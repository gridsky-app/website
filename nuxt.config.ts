import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    devtools: {
        enabled: true
    },

    srcDir: './src',

    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
            ],
            script: [
                { src: 'https://cdn.sellix.io/static/js/embed.js', defer: true }
            ],
        }
    },

    alias: {
        "@": resolve(__dirname, "./src")
    },

    css: [
        '@/styles/index.scss',
        'swiper/css',
        'swiper/css/pagination',
        'swiper/css/navigation',
    ],

    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({
                    autoImport: true,
                }))
            })
        },
        '@nuxtjs/i18n',
        '@nuxt/fonts',
        '@nuxt/icon',
        'nuxt-swiper',
    ],

    i18n: {
        langDir: './locales',
        defaultLocale: 'en',
        locales: [
            {title: 'English', code: 'en', file: 'en/index.ts'},
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        }
    },

    build: {
        transpile: ['vuetify'],
    },

    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
    },

    compatibilityDate: '2024-11-28',
});