import { upperFirst } from "lodash-es"
// import { Library } from "@/types/libraries.types"
import { addUtmParams } from "@/utils/util"

export const libraries = [
  {
    "name": "Mantine",
    "logo": "mantine.svg",
    "url": "https://mantine.dev/",
    "iframeUrl": "https://mantine.dev/core/button/",
    "repoOwner": "mantinedev",
    "repoName": "mantine",
    "package": "@mantine/core",
    "componentCount": 99,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 25149,
    "nbDownloads": 367737,
  },
  {
    "name": "Material UI",
    "logo": "mui.png",
    "url": "https://mui.com/material-ui/",
    "cantPreview": true,
    "repoOwner": "mui",
    "repoName": "material-ui",
    "package": "@mui/material",
    "componentCount": 59,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 92293,
    "nbDownloads": 3713911
  },
  {
    "name": "Tailspark",
    "logo": "favicon.ico",
    "url": "https://tailspark.co",
    "iframeUrl": "https://tailspark.co/components?category=marketing",
    "componentCount": 350,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FFigma"
      }
    ]
  },
  {
    "name": "TailwindFlex",
    "logo": "tailwind-flex.svg",
    "url": "https://tailwindflex.com/",
    "componentCount": 1400,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FFree"
      }
    ],
  },
  {
    "name": "Ant Design",
    "logo": "ant-design.png",
    "url": "https://ant.design/",
    "iframeUrl": "https://ant.design/components/button/",
    "repoOwner": "ant-design",
    "repoName": "ant-design",
    "package": "antd",
    "componentCount": 68,
    "filterMatchings": [
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FForm"
      }
    ],
    "nbStars": 90847,
    "nbDownloads": 1406198
  },
  {
    "name": "Ant Design Vue",
    "logo": "antvue.svg",
    "url": "https://antdv.com",
    "iframeUrl": "https://antdv.com/components/button",
    "repoOwner": "vueComponent",
    "repoName": "ant-design-vue",
    "package": "ant-design-vue",
    "componentCount": 68,
    "filterMatchings": [
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FForm"
      }
    ],
    "nbStars": 19802,
    "nbDownloads": 108925
  },
  {
    "name": "Daisy UI",
    "repoOwner": "saadeghi",
    "repoName": "daisyui",
    "package": "daisyui",
    "logo": "daisyui.svg",
    "url": "https://daisyui.com/?aff=qjOrK",
    "showUrl": "https://daisyui.com",
    "iframeUrl": "https://daisyui.com/components/button/",
    "componentCount": 56,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FCSS"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FRTLSupport"
      }
    ],
    "nbStars": 31827,
    "nbDownloads": 279409
  },
  {
    "name": "Element Plus",
    "logo": "element-plus.svg",
    "url": "https://element-plus.org",
    "iframeUrl": "https://element-plus.org/zh-CN/component/button.html",
    "repoOwner": "element-plus",
    "repoName": "element-plus",
    "package": "element-plus",
    "componentCount": 76,
    "filterMatchings": [
      {
        "id": "FStyled"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FForm"
      }
    ],
    "nbStars": 23605,
    "nbDownloads": 234265
  },
  {
    "name": "Next UI",
    "logo": "nextui.png",
    "url": "https://nextui.org/",
    "iframeUrl": "https://nextui.org/docs/components/button",
    "repoOwner": "nextui-org",
    "repoName": "nextui",
    "package": "@nextui-org/react",
    "componentCount": 55,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FReact"
      }
    ],
    "nbStars": 20295,
    "nbDownloads": 112733
  },
  {
    "name": "Nuxt UI",
    "logo": "nuxt.svg",
    "url": "https://ui.nuxt.com",
    "iframeUrl": "https://ui.nuxt.com/components/button",
    "repoOwner": "nuxtlabs",
    "repoName": "ui",
    "package": "@nuxt/ui",
    "componentCount": 55,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FOfficial"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FFigma"
      }
    ],
    "nbStars": 3526,
    "nbDownloads": 38028
  },
  {
    "name": "Radix",
    "logo": "radix.svg",
    "url": "https://www.radix-ui.com/",
    "iframeUrl": "https://www.radix-ui.com/themes/docs/components/button",
    "repoOwner": "radix-ui",
    "repoName": "primitives",
    "componentCount": 28,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FUnstyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 14779,
    "nbDownloads": 6728856
  },
  {
    "name": "Radix Vue",
    "logo": "radixvue.svg",
    "url": "https://www.radix-vue.com/",
    "iframeUrl": "https://www.radix-vue.com/components/accordion.html",
    "repoOwner": "radix-vue",
    "repoName": "radix-vue",
    "package": "radix-vue",
    "componentCount": 41,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FUnstyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FRoadmap"
      }
    ],
    "nbStars": 2854,
    "nbDownloads": 64498
  },
  {
    "name": "Shadcn",
    "subName": "on top of Radix",
    "subNameZh": "基于 Radix 开发的 UI 库中最流行",
    "logo": "shadcn-ui.png",
    "url": "https://ui.shadcn.com/",
    "iframeUrl": "https://ui.shadcn.com/docs/components/button",
    "repoOwner": "shadcn-ui",
    "repoName": "ui",
    "package": "shadcn-ui",
    "componentCount": 48,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      }
    ],
    "nbStars": 61617,
    "nbDownloads": 66785
  },
  {
    "name": "Shadcn-vue",
    "subName": "on top of Radix Vue",
    "subNameZh": "基于 Radix Vue 开发的 UI 库中最流行",
    "logo": "shadcn.png",
    "url": "https://www.shadcn-vue.com",
    "iframeUrl": "https://www.shadcn-vue.com/docs/components/button.html",
    "repoOwner": "radix-vue",
    "repoName": "shadcn-vue",
    "package": "shadcn-vue",
    "componentCount": 53,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      }
    ],
    "nbStars": 3442,
    "nbDownloads": 2990
  },
  {
    "name": "PrimeVue",
    "logo": "primevue.svg",
    "url": "https://primevue.org",
    "iframeUrl": "https://primevue.org/button/",
    "repoOwner": "primefaces",
    "repoName": "primevue",
    "package": "primevue",
    "componentCount": 88,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FUnstyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FDarkMode"
      }
    ],
    "nbStars": 8560,
    "nbDownloads": 220480
  },
  {
    "name": "Quasar",
    "logo": "quasar.svg",
    "logoDark": "quasar_dark.svg",
    "url": "https://quasar.dev",
    "iframeUrl": "https://quasar.dev/vue-components/button",
    "repoOwner": "quasarframework",
    "repoName": "quasar",
    "package": "quasar",
    "componentCount": 72,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FSemanticColors"
      }
    ],
    "nbStars": 25475,
    "nbDownloads": 127773
  },
  {
    "name": "Vuetify",
    "logo": "vuetify.svg",
    "url": "https://vuetifyjs.com",
    "iframeUrl": "https://vuetifyjs.com/en/components/buttons/#usage",
    "repoOwner": "vuetifyjs",
    "repoName": "vuetify",
    "package": "vuetify",
    "componentCount": 80,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FForm"
      }
    ],
    "nbStars": 39281,
    "nbDownloads": 532932
  },
  {
    "name": "Headless UI",
    "repoOwner": "tailwindlabs",
    "repoName": "headlessui",
    "package": "@headlessui/vue",
    "logo": "headlessui.svg",
    "url": "https://headlessui.com/",
    "iframeUrl": "https://headlessui.com/react/menu",
    "componentCount": 8,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FUnstyled"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FOfficial"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FReact"
      }
    ],
    "nbStars": 24936,
    "nbDownloads": 267949
  },
  {
    "name": "Tailwind UI",
    "subName": "on top of Headless UI",
    "subNameZh": "最流行的 Headless UI 库",
    "logo": "tailwind.svg",
    "cantPreview": true,
    "url": "https://tailwindui.com",
    "iframeUrl": "https://tailwindui.com/components/application-ui/forms/form-layouts",
    "componentCount": 40,
    "filterMatchings": [
      {
        "id": "FStyled"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FOfficial"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FReact"
      }
    ]
  },
  {
    "name": "HyperUI",
    "logo": "hyperui.ico",
    "url": "https://hyperui.dev/",
    "iframeUrl": "https://www.hyperui.dev/components/application-ui/tables",
    "componentCount": 47,
    "repoOwner": "markmead",
    "repoName": "hyperui",
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FReact"
      }
    ],
    "nbStars": 8778
  },
  {
    "name": "Naive UI",
    "logo": "naiveui.svg",
    "url": "https://www.naiveui.com/",
    "iframeUrl": "https://www.naiveui.com/zh-CN/os-theme/components/button",
    "repoOwner": "tusen-ai",
    "repoName": "naive-ui",
    "package": "naive-ui",
    "componentCount": 88,
    "filterMatchings": [
      {
        "id": "FVue"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FForm"
      }
    ],
    "nbStars": 15513,
    "nbDownloads": 35748
  },
  {
    "name": "Flowbite Vue",
    "logo": "flowbite-vue.svg",
    "url": "https://flowbite-vue.com",
    "iframeUrl": "https://flowbite-vue.com/components/button",
    "repoOwner": "themesberg",
    "repoName": "flowbite-vue",
    "package": "flowbite-vue",
    "componentCount": 37,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FVue"
      }
    ],
    "nbStars": 688,
    "nbDownloads": 7433
  },
  {
    "name": "Vant",
    "logo": "vant.png",
    "url": "https://vant-ui.github.io/vant",
    "iframeUrl": "https://vant-ui.github.io/vant/#/button",
    "repoOwner": "youzan",
    "repoName": "vant",
    "package": "vant",
    "componentCount": 81,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      },
      {
        "id": "FDarkMode"
      }
    ],
    "nbStars": 22961,
    "nbDownloads": 52854
  },
  {
    "name": "Vant Weapp",
    "logo": "vant.png",
    "url": "https://vant-ui.github.io/vant-weapp",
    "iframeUrl": "https://vant-ui.github.io/vant-weapp/#/button",
    "repoOwner": "youzan",
    "repoName": "vant-weapp",
    "package": "@vant/weapp",
    "componentCount": 54,
    "filterMatchings": [
      {
        "id": "FMiniProgram"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 17574,
    "nbDownloads": 1906
  },
  {
    "name": "Vuestic UI",
    "logo": "vuestic-ui.png",
    "url": "https://ui.vuestic.dev",
    "iframeUrl": "https://ui.vuestic.dev/ui-elements/button",
    "repoOwner": "epicmaxco",
    "repoName": "vuestic-ui",
    "package": "vuestic-ui",
    "componentCount": 70,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 3349,
    "nbDownloads": 3059
  },
  {
    "name": "Chakra UI",
    "logo": "chakra-ui.png",
    "url": "https://v2.chakra-ui.com/",
    "iframeUrl": "https://v2.chakra-ui.com/docs/components/button/usage",
    "repoOwner": "chakra-ui",
    "repoName": "chakra-ui",
    "package": "@chakra-ui/react",
    "componentCount": 62,
    "filterMatchings": [
      {
        "id": "FReact"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FMobile"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 36983,
    "nbDownloads": 546468
  },
  {
    "name": "Aceternity UI",
    "logo": "aceternity-ui.png",
    "url": "https://ui.aceternity.com/",
    "iframeUrl": "https://ui.aceternity.com/components/3d-pin",
    "componentCount": 53,
    "filterMatchings": [
      {
        "id": "FReact"
      },
      {
        "id": "FMobile"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FPasted"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FDarkMode"
      }
    ],
    "nbStars": 3347,
    "nbDownloads": 3071
  },
  {
    "name": "Wired Elements",
    "logo": "wired-elements.png",
    "url": "https://wiredjs.com/",
    "iframeUrl": "https://wiredjs.com/showcase",
    "repoOwner": "rough-stuff",
    "repoName": "wired-elements",
    "package": "wired-elements",
    "componentCount": 22,
    "filterMatchings": [
      {
        "id": "FReact"
      },
      {
        "id": "FVue"
      },
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 10408,
    "nbDownloads": 5513
  },
  {
    "name": "PrimeReact",
    "logo": "primereact.ico",
    "url": "https://primereact.org/",
    "iframeUrl": "https://primereact.org/button/",
    "repoOwner": "primefaces",
    "repoName": "primereact",
    "package": "primereact",
    "componentCount": 94,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FUnstyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FTailwind"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FThemeGenerator"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FRTLSupport"
      },
      {
        "id": "FForm"
      },
      {
        "id": "FTyped"
      }
    ],
    "nbStars": 6117,
    "nbDownloads": 138923
  },
  {
    "name": "Evergreen",
    "logo": "evergreen.png",
    "url": "https://evergreen.segment.com",
    "iframeUrl": "https://evergreen.segment.com/components/buttons",
    "repoOwner": "segmentio",
    "repoName": "evergreen",
    "package": "evergreen-ui",
    "componentCount": 38,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FSemanticColors"
      }
    ],
    "nbStars": 12352,
    "nbDownloads": 10258
  },
  {
    "name": "Fluent UI",
    "logo": "fluent-ui.ico",
    "url": "https://react.fluentui.dev/",
    "iframeUrl": "https://react.fluentui.dev/?path=/docs/components-button-button--default",
    "repoOwner": "microsoft",
    "repoName": "fluentui",
    "package": "@fluentui/react",
    "componentCount": 63,
    "filterMatchings": [
      {
        "id": "FMobile"
      },
      {
        "id": "FStyled"
      },
      {
        "id": "FImported"
      },
      {
        "id": "FComponents"
      },
      {
        "id": "FReact"
      },
      {
        "id": "FFree"
      },
      {
        "id": "FAccessible"
      },
      {
        "id": "FBuiltinThemes"
      },
      {
        "id": "FDarkMode"
      },
      {
        "id": "FSemanticColors"
      },
      {
        "id": "FFigma"
      },
      {
        "id": "FRoadmap"
      },
      {
        "id": "FRTLSupport"
      }
    ],
    "nbStars": 17975,
    "nbDownloads": 171266
  },
]


export const getLibraries = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)

  return libraries.map((item) => {
    return {
      name: item.name,
      // @ts-ignore
      subName: item[`subName${_lang}`],
      logo: item.logo,
      url: addUtmParams(item.url),
      cantPreview: item.cantPreview,
      iframeUrl: addUtmParams(item.iframeUrl),
      detailUrl: `/c/${item.name.toLowerCase().replace(/\s/g, "-")}`,
      showUrl: item.showUrl || item.url,
      repoOwner: item.repoOwner,
      repoName: item.repoName,
      package: item.package,
      componentCount: item.componentCount,
      filterMatchings: item.filterMatchings,
      nbStars: item.nbStars,
      nbDownloads: item.nbDownloads,
    }
  })
}
