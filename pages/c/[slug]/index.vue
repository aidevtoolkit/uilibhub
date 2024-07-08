<template>
  <UContainer class="px-4 py-8 lg:py-12">
    <div class="prose dark:prose-invert a-hover-primary max-w-none">
      <h1 class="flex items-center gap-2">
        <img :src="`/img/${logo}`" :alt="logo" class="m-0 h-12 w-12 drop-shadow-lg" />
        {{ library.name }}
      </h1>
      <p>
        {{ $t("officialWebsite") }}：
        <ULink
          :to="library.url"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          {{ library.showUrl || library.url }}
        </ULink>
      </p>
      <h2>{{ $t("baseInfo") }}</h2>
      <UTable
        :columns="baseInfoColumns"
        :rows="baseInfos">
        <template #value-data="{ row }">
          <ULink
            v-if="row.url"
            :to="row.url"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            target="_blank"
          >
            {{ row.value }}
          </ULink>
          <span v-else>
            {{ row.value }}
          </span>
        </template>
      </UTable>
      <template v-if="!library.cantPreview">
        <h2>{{ $t("preview") }}</h2>
        <div class="relative overflow-hidden w-full pb-[56.25%] h-[700px]">
          <iframe :src="library.iframeUrl || library.url"
                  :title="library.name"
                  class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <!--        <div class="relative overflow-hidden w-full pb-[56.25%]">-->
        <!--          <iframe :src="library.iframeUrl || library.url"-->
        <!--                  :title="library.name"-->
        <!--                  class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"-->
        <!--                  frameBorder="0"-->
        <!--                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
        <!--                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>-->
        <!--        </div>-->
      </template>
      <h2>{{ $t("features") }}</h2>
      <UTable
        :columns="featureColumns"
        :rows="features">
        <template #label-data="{ row }">
          <div class="whitespace-pre-wrap flex items-center gap-1">
            <UIcon :name="row.icon" />
            <span>{{ row.label }}</span>
          </div>
        </template>
        <template #help-data="{ row }">
          <div class="whitespace-pre-wrap">
            {{ row.help }}
          </div>
        </template>
      </UTable>
      <h2>{{ $t("otherYouMayLike") }}</h2>
      <ul class="p-0">
        <li v-for="(item, index) in randomLibraries"
            :key="index"
            class="flex items-center gap-2 mb-10">
          <img :src="`/img/${item.logo}`"
               :alt="item.name"
               class="h-12 w-12 drop-shadow-lg mt-0 mb-0 mr-2" />
          <ULink
            :to="item.url"
            :title="item.name"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            {{ item.finalName }}
          </ULink>
        </li>
      </ul>
    </div>
  </UContainer>
</template>

<script setup>
import { getLibraries } from "@/data/libraries"
import { getButtonFilters } from "@/data/filters"
import { getDisplayableNumber } from "@/utils/getDisplayableNumber"

const route = useRoute()
const { locale, t } = useI18n()
const libraries = getLibraries(locale.value)
const colorMode = useColorMode()
const buttonFilters = getButtonFilters(locale.value)
const currentLocale = computed(() => locale.value)

// 获取 slug
const slug = route.params.slug

const library = computed(() => {
  return libraries.find((item) => item.name.toLowerCase().replace(/\s/g, "-") === slug)
})

const repoUrl = ((library) =>
  library.repoName && library.repoOwner
    ? `https://github.com/${ library.repoOwner }/${ library.repoName }`
    : undefined)(library.value)

const registryUrl = ((library) =>
  library.package ? `https://www.npmjs.com/package/${ library.package }` : undefined)(
  library.value,
)

const baseInfoColumns = [ {
  key: "field",
  label: t("baseInfoField"),
}, {
  key: "value",
  label: t("baseInfoValue"),
} ]

const baseInfos = [
  {
    field: t("baseInfoComponentCount"),
    value: `${ library.value.componentCount }+`,
  },
  {
    field: t("baseInfoStars"),
    value: library.value.nbStars ? getDisplayableNumber(library.value.nbStars) : "-",
    url: repoUrl,
  },
  {
    field: t("baseInfoNpmDownloads"),
    value: library.value.nbDownloads ? getDisplayableNumber(library.value.nbDownloads) : "-",
    url: registryUrl,
  },
]

const featureColumns = [ {
  key: "label",
  label: t("featuresField"),
  class: currentLocale.value === "zh" ? "sm:w-[300px]" : "sm:w-[200px]",
}, {
  key: "help",
  label: t("featuresExplanation"),
  class: 'whitespace-pre-wrap',
} ]

const features = buttonFilters.filter((item) => {
  return library.value.filterMatchings.find((_filterMatching) => {
    return item.id === _filterMatching.id
  })
}).map((item) => {
  let label = item.label

  if (currentLocale.value === "zh") {
    label = `${ label }（${ item.rawLabel }）`
  }

  return {
    id: item.id,
    label,
    icon: item.icon,
    help: item.help,
  }
})

const logo = (() =>
  colorMode.value == "dark" && library.value.logoDark
    ? library.value.logoDark
    : library.value.logo)()


function getRandomLibraries() {
  // 过滤出名称不等于 slug 的库
  const filteredLibraries = libraries.filter(item => item.name.toLowerCase().replace(/\s/g, "-") !== slug)

  // 随机排序过滤后的库
  const randomizedLibraries = filteredLibraries.sort(() => Math.random() - 0.5)

  // 选择前六个库
  const selectedLibraries = randomizedLibraries.slice(0, 6)

  return selectedLibraries
}

const randomLibraries = computed(() => {
  return getRandomLibraries().map((item) => {
    const names = [ `${ item.name } - ${ item.componentCount }+ ${ t("componentCount") }` ]

    if (item.nbStars) {
      names.push(`${ getDisplayableNumber(item.nbStars) } ${ t("baseInfoStars") }`)
    }

    if (item.nbDownloads) {
      names.push(`${ getDisplayableNumber(item.nbDownloads) } ${ t("baseInfoNpmDownloads") }`)
    }

    return {
      name: item.name,
      url: `/c/${ item.name.toLowerCase().replace(/\s/g, "-") }`,
      finalName: names.join("、"),
      logo: (() =>
        colorMode.value == "dark" && item.logoDark
          ? item.logoDark
          : item.logo)(),
    }
  })
})

const finalTitle = `${ library.value.name } | UILibHub`
let description = `${ library.value.name } ${ library.value.componentCount }+ ${ t("componentCount") },`


if (library.value.nbStars) {
  description += `${ getDisplayableNumber(library.value.nbStars) } ${ t("baseInfoStars") }, `
}
if (library.value.nbDownloads) {
  description += `${ getDisplayableNumber(library.value.nbDownloads) } ${ t("baseInfoNpmDownloads") }, `
}

const featuresString = features.map((item) => {
  return item.label
}).slice(0, 7).join("、")

description += featuresString

useSeoMeta({
  title: finalTitle,
  description: description,
  ogTitle: finalTitle,
  ogDescription: description,
})

</script>