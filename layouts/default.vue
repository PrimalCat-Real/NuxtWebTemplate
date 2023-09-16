<template>
  <div class="h-[200vh]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import Lenis from '@studio-freight/lenis'

interface LenisEvent {
  target: Lenis;
  type: string;
  [key: string]: unknown;
}

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
</script>

<style>

</style>