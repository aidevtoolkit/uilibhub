<template>
  <MdRender :article="data" />
</template>

<script setup>
const { locale: { value: localCode } } = useI18n()

const { data } = await useAsyncData(
  `/privacy-policy/${ localCode }`,
  () => queryContent('privacy-policy', localCode).findOne()
)

const { title, description } = data.value
const finalTitle = `${title} | UILibHub`

useSeoMeta({
  title: finalTitle,
  description: description,
  ogTitle: finalTitle,
  ogDescription: description,
})

</script>