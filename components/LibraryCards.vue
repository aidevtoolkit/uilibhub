<template>
  <div class="flex-grow">
    <div class="mt-2.5 mb-8">
      <span class="font-bold text-primary mr-2">{{ total }}</span>{{ $t('total') }}
    </div>
    <div class="grid grid-cols-1 content-start gap-6 lg:grid-cols-2">
      <LibraryCard
        v-for="library in finalLibraries"
        :key="library.name"
        :initialLibrary="library" />
    </div>
    <UPagination
      class="mt-8"
      v-model="vPage"
      :page-count="pageCount"
      :total="total"
      :to="(_page) => {
        return {
          path: localePath(`/p/${_page}`),
        }
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { getLibraries } from "@/data/libraries"

const { locale } = useI18n()
const libraries = getLibraries(locale.value)
const localePath = useLocalePath()

const props = defineProps({
  page: {
    type: String,
  },
})

const vPage = ref(Number(props.page))
const total = ref(0)
const pageCount = ref(10)

function paginate(_libraries, _page) {
  // 确保页码为正整数
  if (_page < 1) {
    throw new Error("页码必须大于等于 1")
  }

  // 计算起始索引
  const startIndex = (_page - 1) * pageCount.value
  // 计算结束索引
  const endIndex = startIndex + pageCount.value

  // 截取数组并返回
  return _libraries.slice(startIndex, endIndex)
}

// const finalLibraries = ref(libraries.filter((item) => isDisplay(item)))
const finalLibraries = computed(() => {
  const { touchedButtonFilterIDs, rangeFiltering } = useFilterStore()

  const isDisplay = (library: any) => {
    const nbComponents = library.componentCount
    /* Return true if this card should be displayed */
    const libraryFilterIDs = library.filterMatchings.map((obj) => obj.id)

    // Check wether all the button logic is satisfied, and debranch if not
    if (isSubset(touchedButtonFilterIDs(), libraryFilterIDs) == false) {
      return false
    }

    // ... Now range logic must be verified too.
    // We need to check every range filters living in the state
    if (
      rangeFiltering.value.FNbStars.qty > 0 &&
      library.nbStars! < rangeFiltering.value.FNbStars.qty
    ) {
      return false
    }
    if (
      rangeFiltering.value.FNbDownloads.qty > 0 &&
      library.nbDownloads! < rangeFiltering.value.FNbDownloads.qty * 1000
    ) {
      return false
    }
    if (
      rangeFiltering.value.FNbComponents.qty > 0 &&
      nbComponents < rangeFiltering.value.FNbComponents.qty
    ) {
      return false
    }

    return true
  }

  const filteredLibs = libraries.filter((item) => isDisplay(item))
  total.value = filteredLibs.length

  return paginate(filteredLibs, props.page)
})

</script>
