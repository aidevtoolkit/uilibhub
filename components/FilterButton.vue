<template>
  <UTooltip>
    <UButton
      class="w-full text-left"
      :icon="buttonFilter.icon"
      :label="buttonFilter.label"
      :variant="buttonFiltering[buttonFilter.id].selected ? 'solid' : 'ghost'"
      @click="invertButtonFiltering(buttonFilter.id)"
    />
    <template #text>
      {{ buttonFilter.help }}
    </template>
  </UTooltip>
</template>

<script setup lang="ts">
import { getButtonFilters } from "@/data/filters"
import type { ButtonFilterID } from "@/types/filters.types"
const props = defineProps<{ buttonFilterID: ButtonFilterID }>()


const { locale } = useI18n()
// const currentLocale = locale.value
const buttonFilters = getButtonFilters(locale.value)

const buttonFilter = findBy("id", props.buttonFilterID, buttonFilters)!

const { buttonFiltering, invertButtonFiltering } = useFilterStore()
</script>
