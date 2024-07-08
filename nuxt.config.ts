// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/content",
  ],
  ui: {
    global: true,
    icons: "all",
  },
  content: {
    locales: [
      "en", "zh",
    ],
    defaultLocale: "en",
  },
  i18n: {
    baseUrl: "https://uilibhub.com",
    strategy: "prefix_and_default", // 添加路由前缀的方式
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "zh",
        iso: "zh-CN",
      },
    ],
    // locales: ["en"], //配置语种
    defaultLocale: "en", // 默认语种
    vueI18n: "./i18n.config.ts", // 通过vueI18n配置
    // @ts-ignore
    // detectBrowserLanguage: process.env.NODE_ENV === 'production',
    // detectBrowserLanguage: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",  // 只在根路径 '/' 检测浏览器语言
      // alwaysRedirect: true,
      fallbackLocale: "en",
    },
  },
  runtimeConfig: {
    public: {
      loadPlausible: "", // overrided by env,
    },
  },
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        // https://nuxt.com/blog/v3-5#bundler-module-resolution
        moduleResolution: "bundler",
        paths: {
          "@": [ "." ],
          "@/*": [ "./*" ],
        },
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  devtools: { enabled: false },
  devServer: {
    host: '0.0.0.0', // 这允许外部访问
    port: 3000 // 可选：指定端口，默认是 3000
  }
})
