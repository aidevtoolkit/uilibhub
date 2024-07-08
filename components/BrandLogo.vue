<template>
  <NuxtLink :to="localePath('/')"
                  class="hover:text-black dark:hover:primary-text flex h-12 items-center gap-2">
          <img class="primary-text h-8 w-8"
               alt="UILibHub's logo"
               src="/favicon.png" />
          <h1 class="text-xl font-bold">UILibHub</h1>
        </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>