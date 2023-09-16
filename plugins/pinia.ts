import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

    // You can access the pinia instance using nuxtApp.pinia in your components
    nuxtApp.pinia = pinia
})