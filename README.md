# UILibHub

![UILibHub](./docs/banner.jpg)

English | [中文](./README-zh.md)

## What is UILibHub?
UILibHub focuses on collecting and sharing high-quality resources for React, Vue, and Mini Program component libraries. UILibHub provides the latest and most comprehensive component library recommendations, helping developers efficiently build modern applications. The website is developed based on David Dahan's open-source project [UI Libs](https://github.com/ddahan/ui-libs), for which we are grateful. The main modifications to UI Libs include:

### Feature Enhancements
1. **Expanded Library Collection**: Added UI libraries for React, mobile, and mini programs, currently featuring over **30** high-quality UI libraries.
2. **Multi-language Support**: Currently supports Chinese、English and Japanese, with plans to support more languages in the future.
3. **Removed the available component statistics panel for two reasons**:
   1. In actual development, it's better to select components based on filtering criteria such as theme attractiveness, form support, mobile compatibility, etc., rather than fixating on whether library A has a component that library B doesn't.
   2. The available component statistics panel is difficult to maintain.
4. **Pagination**: Improves browsing experience for large amounts of data.
5. **Detail Page Improvements**: Added component library detail pages, including feature introductions, component previews, and related links.

### Technical Optimizations
1. **Markdown Support**: Use Markdown syntax to write static page content.
2. **SEO Optimization**: Improved meta tags for each page to enhance search engine visibility.
3. **Traffic Analytics Integration**: Integrated Google Tag Manager for easy data analysis. Modify `app.vue` and replace `YOUR-GTM-ID` with your own GTM ID.

Learn more about features at [https://uilibhub.com/about](https://uilibhub.com/about)

## Submit a Project
Contributions to UILibHub are welcome! You can:
- Recommend or self-nominate UI libraries
- Submit websites using UI libraries listed on our site (to be showcased as UI library examples)

For project submissions, please refer to the [Submission Guide](https://github.com/aidevtoolkit/uilibhub/blob/main/docs/submission-guide-en.md).

## Tech Stack
- [Nuxt3](https://nuxt.com/): Vue3 server-side rendering framework
- [Nuxt UI](https://ui.nuxt.com/): UI component library
- [nuxt/i18n](https://i18n.nuxtjs.org/): Multi-language support
- [Nuxt Content](https://content.nuxt.com/): Markdown content management
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/): Static type checking

## What can this open-source template be used for?
This template is ideal for building various resource navigation websites, such as:
- Tool directories: e.g., AI tool directories, front-end tool directories
- Learning resource catalogs
- Design resource libraries
- Open-source project showcases

It offers powerful filtering functionality, multi-language support, and good SEO optimization, allowing for quick setup of professional navigation websites.

## How to Use?
Installation & Startup:
```shell
npm i
npm run dev
```

Deployment:
You can deploy for free using [Cloudflare Pages](https://pages.cloudflare.com/).

## Sponsor
### CSS Scan 4.0
**⚡️ CSS Scan is the fastest and easiest way to check, copy, and edit CSS.** Check the CSS of any element you hover over instantly and copy all its rules with a single click.
[![CSS Scan](./docs/css-scan-bg.jpg)](https://gumroad.com/a/634407443/fULny)

## Other Things
you can contact me at X(Twitter): https://x.com/luobogor

if this project is helpful to you, [buy me a coffee](https://ko-fi.com/luobogor).