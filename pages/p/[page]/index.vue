<template>
  <div>
    <HomeCmp :page="page" />
  </div>
</template>

<script setup>
const route = useRoute()
const page = route.params.page
</script>
