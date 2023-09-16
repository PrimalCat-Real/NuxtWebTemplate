<template>
  <div>
    <div>
      <ClientOnly  placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ClientOnly>
      <!-- <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select> -->
      <li
        v-for="color of ['system', 'light', 'dark', 'sepia']"
        :key="color"
        :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value
        }"
      >
      <span @click="$colorMode.preference = color">{{ color }}</span>
      </li>
    </div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
    <div class="bg-white dark:bg-gray-800">
      <h1 class="text-gray-900 dark:text-white">Dark mode is here!</h1>
      <p class="text-gray-600 dark:text-gray-300 font-roboto">
        Lorem ipsum...
      </p>
    </div>
    <button @click="testStore.increment()" >+</button>
    <span>{{ testStore.count }}</span>
    <span>{{ testStore.secondCount }}</span>
    <span>{{ testStore.doublePlusOne }}</span>
    <div>
      pos: {{ x }}, {{ y }}
    </div>
    <div>
      <NuxtImg 
        loading="lazy"
        fit="cover"
        format="avif,webp,gif" 
        densities="x1 x2"
        :placeholder="[50, 25, 75, 5]"
        :imgAttrs="{id:'my-id', class:'my-class', style:'display:block', 'data-my-data': 'my-value'}"
        src="/test.png"/>
      <NuxtPicture format="avif,webp,gif" sizes="xs:200px md:500px" src="/test.png"/>
    </div>
  </div>
</template>


<script setup lang="ts">
// https://vuejs.org/guide/introduction.html
import Lenis from '@studio-freight/lenis'


// https://vueuse.org/guide/
const { x, y } = useMouse()

const colorMode = useColorMode()
const testStore = useTestStore()


console.log(colorMode.preference)

interface LenisEvent {
  target: Lenis;
  type: string;
  [key: string]: unknown;
}
// https://github.com/studio-freight/lenis
onMounted(() => {
    const lenis: Lenis = new Lenis()
    if (window) {
        lenis.on('scroll', (e: LenisEvent) => {
            console.log(e)
        })
        requestAnimationFrame(raf)
    }
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
})

// lang
const { locale, setLocale  } = useI18n()
console.log(setLocale)

// const availableLocales = computed(() => {
//     return (locales.value).filter(i => i.code !== locale.value)
// })

/**
 * reset value in store to default one
 */
// testStore.$reset()

/**
 * It allows you to apply multiple changes at the same time with a partial state object:
 */
// testStore.$patch({
//     count: testStore.count + 1,
//     secondCount: testStore.secondCount + 2,
// })


// watch store changes
watch(
    () => testStore.count,
    (newValue, oldValue) => {
        console.log('Filters changed from', oldValue, 'to', newValue)
        // your code to handle the change
    }, 
    { deep: true }  // This line is needed to watch changes on object properties
)

// getter usage
// console.log(testStore.doublePlusOne)

const { data } = await useAsyncGql('data', { id: 5 })
console.log(data.value)


// more advanced method example

// const { data, error, pending, refresh } = await useAsyncGql({
//     operation: 'ships',
//     variables: { limit: 15 },
//     options: {
//       transform: (data) => data.ships.map((ship) => ship.name),
//     }
// })

// if (error.value) {
//   // eslint-disable-next-line no-console
//   console.error(error.value)
// }

</script>

<style>
</style>