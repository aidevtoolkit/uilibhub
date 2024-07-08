<template>
  <NuxtLoadingIndicator />
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup>
const { t } = useI18n()

const title = t("siteTitle")
const description = t("siteDescription")

const localeHead = useLocaleHead({
  addSeoAttributes: true,
})

const siteUrl = 'https://uilibhub.com'
const ImageUrl = 'https://uilibhub.com/og.png'

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title,
  ogUrl: siteUrl,
  ogImage: ImageUrl,
  //
  twitterTitle: title,
  twitterSite: siteUrl,
  twitterDescription: description,
  twitterCard: 'summary_large_image',
  twitterImage: ImageUrl,
  twitterImageAlt: title,
  twitterCreator: '@luobogooooo',
})

useHead({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs?.lang,
  },
  script: [
    {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4KXKQSW');`,
      type: "text/javascript",
    },
  ],
  link: (localeHead.value.link || []).filter(({ hreflang, rel }) => hreflang?.includes("-") || rel === "canonical"),
  meta: [ ...(localeHead.value.meta || []) ],
})
</script>

<style>
.hide-scroller-g {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scroller-g::-webkit-scrollbar {
  display: none;
}
</style>
