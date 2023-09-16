// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            'title': 'Orbiter',
            'meta': [
                {
                    'name': 'viewport',
                    'content': 'width=device-width, initial-scale=1'
                },
                {
                    'charset': 'utf-8'
                }
            ],
            'link': [],
            'style': [],
            'script': [],
            'noscript': []
        },
    }, 
    devtools: { enabled: true },
    imports: {
        dirs: ['stores']
    },
    runtimeConfig: {
        public: {
            GQL_HOST: process.env.GQL_HOST// overwritten by process.env.GQL_HOST
            /* https://nuxt-graphql-client.web.app/getting-started/quick-start */
        }
    },
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        'nuxt-headlessui',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/robots',
        'nuxt-graphql-client',
        'nuxt-gtag',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
    ],
    plugins: [
        // Other plugins
        // { src: '~/plugins/lenis.js', mode: 'client' },
    ],
    colorMode: {
        preference: 'light', // default theme
        fallback: 'light',
        hid: 'nuxt-color-mode-script',
        dataValue: 'theme', // activate data-theme in <html> tag
        classPrefix: '',
        classSuffix: '',
        storageKey: 'nuxt-color-mode'
        /* https://color-mode.nuxtjs.org/ */
    },
    googleFonts: {
        preconnect: true,
        families: {
            'Roboto Mono': true,
            /* https://google-fonts.nuxtjs.org/getting-started/setup */
        } 
    },
    headlessui: {
        prefix: 'Headless'
        /* https://nuxt.com/modules/headlessui */
    },
    image: {
        /* https://image.nuxtjs.org/get-started */
        /*
            To enable image optimization on an external website, specify which domains are allowed to be optimized. 
            This option will be used to detect whether a remote image should be optimized or not. 
            This is needed to ensure that external urls can't be abused.
        */
        // domains: ['nuxtjs.org'], 
        dir: 'assets/images',
        // The screen sizes predefined by `@nuxt/image`:
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },
    },
    robots: {
        /* https://nuxt.com/modules/robots */
    },
    pinia: {
        autoImports: ['defineStrore']
    },
    gtag: {
        id: 'G-XXXXXXXXXX'
        // https://nuxt.com/modules/gtag
        // https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a173959422p242235946/admin/streams
    },
    i18n: {
        /* module options */
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en-US.ts'
            },
            {
                code: 'fr',
                name: 'Français',
                file: 'fr-FR.ts'
            }
        ],
        langDir: 'lang',
        // defaultLocale: 'fr',    // default locale of your project for Nuxt pages and routings
        // detectBrowserLanguage: {
        //     useCookie: false
        // }

        // https://v8.i18n.nuxtjs.org/getting-started/setup
    },
    // eslint: {
    // 	/* https://nuxt.com/modules/eslint */
    // }
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        // configPath: 'tailwind.config',
        // exposeConfig: false,
        // exposeLevel: 2,
        // config: {},
        // injectPosition: 'first',
        // viewer: true,
        /* https://tailwindcss.nuxtjs.org/getting-started/options */
    },
    'graphql-client':{
        // https://nuxt-graphql-client.web.app/getting-started/quick-start
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./'],
        preferGETQueries: false
    }

})
