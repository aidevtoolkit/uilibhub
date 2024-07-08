<template>
  <UContainer class="px-4 py-8 lg:py-12">
    <ContentRenderer
      :value="article">
      <div class="prose dark:prose-invert mx-auto a-hover-primary">
        <h1>{{ article.title }}</h1>
        <ContentRendererMarkdown
          :value="article" />
      </div>
    </ContentRenderer>
  </UContainer>
</template>

<script setup>
// 定义 props，接收父组件传递的 pageSlug
const props = defineProps({
  article: {
    type: Object,
  },
})
</script>