import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useTestStore = defineStore('test', {
    state: () => {
        return {
            user: null as UserInfo | null,
            count: 0 as number,
            secondCount: 1 as number,
        }
    },
    getters: {
        getCount: (state) => state.count,
        getSecondCount: (state) => state.secondCount,
        // the return type **must** be explicitly set
        doublePlusOne(): number {
            // autocompletion and typings for the whole store ✨
            return this.secondCount + 1
        },
    },
    actions: {
        increment() {
            this.count++
        },
    },
    /**
     * pinia-plugin-persistedstate
     * Key used to reference the stored deserialized data in the storage.
     * This store will be persisted under the my-custom-key key in localStorage.
    **/
    // persist: {
    //     key: 'my-custom-key',
    //     // save data to session store https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    //     storage: sessionStorage,
    // },
    // persist: true,
})

interface UserInfo {
    name: string
    age: number
}

/**
 * ref()s become state properties
 * computed()s become getters
 * function()s become actions
**/

// export const useTestStore = defineStore('test', () => {
//     const count = ref(0)
  
//     function $reset() {
//         count.value = 0
//     }

//     function increment() {
//         count.value++
//     }
  
//     return { count, $reset, increment }
// })
