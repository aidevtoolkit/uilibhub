<template>
  <div class="hide-scroller-g md:sticky md:top-[75px] md:max-h-[90vh] md:overflow-auto">
    <div class="flex flex-col gap-6">
      <UButton
        color="white"
        variant="solid"
        :label="$t('becomeSponsor')"
        to="mailto:info@uilibhub.com"
        size="xl"
      />
      <NuxtLink to="https://melecode.com/"
                target="_blank">
        <img src="/img/mele-banner.png"
             alt="美乐全栈低代码"
             class="h-[80px] drop-shadow-lg" />
      </NuxtLink>
      <UButton
        color="gray"
        variant="ghost"
        size="xs"
        icon="i-material-symbols-delete-outline-rounded"
        :label="clearFiltersLabel"
        @click="handleClearFiltering"
      />
    </div>
    <UAccordion
      :items="accordionSections"
      color="black"
      size="xl"
      variant="ghost"
      :multiple="true"
    >
      <template #mainFeatures>
        <div class="ml-2 flex flex-col gap-1">
          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FReact" />
            <FilterButton buttonFilterID="FVue" />
          </div>

          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FMobile" />
            <FilterButton buttonFilterID="FTailwind" />
          </div>

          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FStyled" />
            <FilterButton buttonFilterID="FUnstyled" />
          </div>

          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FImported" />
            <FilterButton buttonFilterID="FPasted" />
          </div>

          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FComponents" />
            <FilterButton buttonFilterID="FCSS" />
          </div>

          <div class="grid grid-cols-2 gap-1">
            <FilterButton buttonFilterID="FMiniProgram" />
            <FilterButton buttonFilterID="FFree" />
          </div>
        </div>
      </template>

      <template #moreFeatures>
        <div class="ml-2 flex flex-col gap-1">
          <FilterButton buttonFilterID="FAccessible" />
          <FilterButton buttonFilterID="FBuiltinThemes" />
          <FilterButton buttonFilterID="FThemeGenerator" />
          <FilterButton buttonFilterID="FDarkMode" />
          <FilterButton buttonFilterID="FSemanticColors" />
          <FilterButton buttonFilterID="FFigma" />
          <FilterButton buttonFilterID="FOfficial" />
          <FilterButton buttonFilterID="FRoadmap" />
          <FilterButton buttonFilterID="FRTLSupport" />
          <FilterButton buttonFilterID="FTyped" />
          <FilterButton buttonFilterID="FForm" />
        </div>
      </template>

      <template #availableComponents>
        <div class="ml-2">
          <FilterRange rangeFilterID="FNbComponents" />
        </div>
      </template>

      <template #popularity>
        <div class="ml-2 flex flex-col gap-1">
          <FilterRange rangeFilterID="FNbStars" />
          <FilterRange rangeFilterID="FNbDownloads" />
        </div>
      </template>
    </UAccordion>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const accordionSections = [
  {
    label: t("mainFeatures"),
    defaultOpen: true,
    slot: "mainFeatures",
  },
  {
    label: t("moreFeatures"),
    defaultOpen: true,
    slot: "moreFeatures",
  },
  {
    label: t("availableComponents"),
    defaultOpen: true,
    slot: "availableComponents",
  },
  {
    label: t("popularity"),
    defaultOpen: true,
    slot: "popularity",
  },
]

const { nbTouchedFilters, clearFiltering } = useFilterStore()

// const suffix = computed(() => (nbTouchedFilters() == 1 ? "" : "s"))

const clearFiltersLabel = computed(() => {
  const count = nbTouchedFilters()
  const suffix = count === 1 ? "" : "s"
  return t("clearFilters", { count, suffix })
})

const handleClearFiltering = () => {
  if (nbTouchedFilters() <= 0) {
    return
  }

  clearFiltering()
}
</script>