<template>
  <div>
    <UDropdown
      :ui="{ width: 'w-28' }"
      :items="items"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton icon="i-ooui-language" :square="true" variant="ghost" />
    </UDropdown>
  </div>
</template>

<script setup>
const { setLocale } = useI18n()

const toLang = (lang) => {
  setLocale(lang)
}

const items = [
  [
    {
      label: "English",
      click: () => {
        toLang("en")
      },
    },
    {
      label: "中文",
      click: () => {
        toLang("zh")
      },
    },
  ],
]
</script>
