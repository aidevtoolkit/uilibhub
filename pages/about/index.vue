<template>
  <MdRender :article="data" />
</template>

<script setup>
const { locale: { value: localCode } } = useI18n()

const { data } = await useAsyncData(
  `/about/${ localCode }`,
  () => queryContent('about', localCode).findOne()
)

const { title } = data.value
const finalTitle = `${title} | UILibHub`

useSeoMeta({
  title: finalTitle,
  // description: description,
  ogTitle: finalTitle,
  // ogDescription: description,
})

</script>