<template>
  <UContainer class="pb-6">
    <h1
      v-if="currentLocale === 'en'"
      class="mt-6 text-center sm:my-12">
      <span class="block mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Discover the best UI Library
      </span>
      <span class="block text-lg sm:text-xl">
        for your
        <span class="primary-text font-semibold">React</span>
        and
        <span class="primary-text font-semibold">Vue</span>
        Project.
      </span>
    </h1>

    <h1
      v-else-if="currentLocale === 'zh'"
      class="mt-6 text-center sm:my-12">
      <span class="block mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        探索最佳 UI 库
      </span>
      <span class="block text-lg sm:text-xl">
        助力
        <span class="primary-text font-semibold">React</span>
        &
        <span class="primary-text font-semibold">Vue</span>
        高效开发
      </span>
    </h1>

    <div class="mt-6 flex flex-grow justify-center gap-4 sm:mt-8">
      <!-- filters -->
      <div class="-mt-2 hidden w-72 shrink-0 p-3 md:block">
        <Filters />
      </div>

      <LibraryCards :page="page" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const currentLocale = locale.value

const props = defineProps({
  page: {
    type: String,
  },
})

// const filterStore = useFilterStore()
// watch(() => filterStore.buttonFiltering.value, (value) => {
//   console.log('vale....:', value)
// }, { immediate: true })
//
//
// watch(() => props.page, (value) => {
//   console.log('page....:', value)
// }, { immediate: true })
</script>
