<template>
  <header
    class="sticky top-0 z-20 border-t border-transparent shadow-sm shadow-gray-200 backdrop-blur-md dark:shadow-gray-600">
    <div class="px-4 py-2 md:px-8">
      <div class="md:hidden flex justify-center">
        <BrandLogo />
      </div>
      <div class="flex items-center justify-between">
        <div class="flex h-12 items-center gap-2">
          <div v-if="isIndex" class="md:hidden">
            <UButton
              icon="i-material-symbols-format-list-bulleted"
              :square="true"
              variant="outline"
              @click="isMenuOpen = true"
            />
            <USlideover
              @dblclick.prevent=""
              v-model="isMenuOpen"
              side="left"
              :ui="{ width: 'max-w-xs' }"
              class="md:hidden"
            >
              <SlideoverContent>
                <Filters />
              </SlideoverContent>
            </USlideover>
          </div>
          <BrandLogo class="hidden md:flex" />
        </div>
        <div class="flex items-center justify-end gap-1 md:gap-2">
          <UButton
            icon="i-heroicons-outline-book-open"
            :square="true"
            :trailing="false"
            variant="ghost"
            :title="$t('userGuide')"
            :to="localePath('/about')"
          >
            <!--          <span class="hidden md:inline-block">-->
            <!--            {{ $t("userGuide") }}-->
            <!--          </span>-->
          </UButton>
          <UButton
            icon="i-mdi-github"
            :square="true"
            variant="ghost"
            title="github"
            :to="appConfig.repoUrl"
            target="_blank"
          />
          <ThemeSelector />
          <LangSelector />
          <UButton
            icon="i-simple-icons-buymeacoffee"
            :square="true"
            :trailing="false"
            variant="ghost"
            :to="coffeeLink"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BrandLogo from "@/components/BrandLogo.vue"

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)
const appConfig = useAppConfig()
const route = useRoute()
const localePath = useLocalePath()

const isIndex = computed(() => {
  const routerName = route.name?.toString()
  return routerName?.startsWith("index") || routerName?.startsWith("p-page")
})
const isMenuOpen = ref(false)
const coffeeLink = computed(() => currentLocale.value === "zh" ? "https://cdn.sanity.io/images/ntncowsx/production/ef19529d61d4a646522d1b2f5b9f7e574f40aa2a-691x691.jpg" : "https://ko-fi.com/luobogor")
</script>
