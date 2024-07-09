<template>
  <footer
    class="a-hover-primary text-gray-700 dark:text-slate-400 px-4 py-8 lg:py-12 md:px-8 border-t border-t-gray-200 dark:border-t-gray-700">
    <div class="flex flex-col gap-10 lg:flex-row lg:justify-between">
      <div>
        <BrandLogo />
        <p class="mt-6 max-w-md text-pretty leading-relaxed">
          {{ $t("footerDescription") }}
        </p>
        <!--          <div class="flex mt-2 text-xl gap-1">-->
        <!--            <IconX/>-->
        <!--            <IconCoffee/>-->
        <!--          </div>-->
      </div>

      <div class="grid grid-cols-3 gap-10">
        <div>
          <h3 class="text-sm mb-2 font-semibold"
              data-dir="false">{{ $t("footerTitle1") }}</h3>
          <ul class="flex flex-col space-y-2">
            <li v-for="menuLink in productLinks" :key="menuLink.href">
              <NuxtLink
                :to="menuLink.href"
                :title="menuLink.title"
                target="_blank"
                class="dark:text-slate-400 block text-sm text-gray-900"
              >
                {{ menuLink.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
          <div>
          <h3 class="text-sm mb-2 font-semibold"
              data-dir="false">{{ $t("footerTitle2") }}</h3>
          <ul class="flex flex-col space-y-2">
            <li v-for="menuLink in aboutLinks" :key="menuLink.href">
              <NuxtLink
                :to="localePath(menuLink.href)"
                :title="menuLink.title"
                class="dark:text-slate-400 block text-sm text-gray-900"
              >
                {{ menuLink.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
          <div>
          <h3 class="text-sm mb-2 font-semibold"
              data-dir="false">{{ $t("footerTitle3") }}</h3>
            <ul class="flex flex-col space-y-2">
              <li v-for="menuLink in menuLinks" :key="menuLink.href">
                <NuxtLink
                  :to="localePath(menuLink.href)"
                  :title="menuLink.title"
                  class="dark:text-slate-400 block text-sm text-gray-900"
                >
                  {{ menuLink.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
      </div>
    </div>

    <div class="text-gray-700 dark:text-slate-400 mt-4 lg:flex lg:items-end lg:justify-between">
      <p
        class="text-sm lg:mt-0">
        ©2024 UILibHub - info@uilibhub.com | Powered by<a target="_blank" href="https://github.com/ddahan/ui-libs">&nbspUI
        Lib Picker&nbsp</a>
      </p>

      <p class="mt-4 text-sm lg:mt-0">
        Created by
        <a
          href="https://twitter.com/luobogooooo"
          rel="noreferrer"
          target="_blank"
          class="inline-block font-medium"
        >
          luobogor
        </a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import BrandLogo from "@/components/BrandLogo.vue"

const localePath = useLocalePath()
const { locale, t } = useI18n()
const currentLocale = computed(() => locale.value)

const menuLinks = computed(() => [
  {
    title: t("footerTerms2"),
    href: "/privacy-policy",
  },
  {
    title: t("footerTerms3"),
    href: "/terms-of-service",
  },
])

const productLinks = computed(() => [
  {
    title: t("footerTerms4"),
    href: "https://indiehackertools.net/",
  },
])

const aboutLinks = computed(() => [
  {
    title: t("footerTerms1"),
    href: "/about",
  },
])
</script>