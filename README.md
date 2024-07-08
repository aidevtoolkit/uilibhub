# UILibHub

![UILibHub](./docs/banner.jpg)

English | [中文](./README-zh.md)

## What is UILibHub?
UILibHub is a resource platform focused on collecting and sharing component libraries for React, Vue, and Mini Programs. We provide the latest and most comprehensive recommendations for component libraries, aiming to help developers efficiently build modern applications. This website is developed based on David Dahan's open-source project [UI Libs](https://github.com/ddahan/ui-libs), with the following major enhancements:

### Feature Enhancements
1. **Expanded Library Collection**: Added UI libraries for React, mobile, and mini programs, currently featuring over **30** high-quality UI libraries.
2. **Multi-language Support**: Currently supports Chinese and English, with plans to support more languages in the future.
3. Removed the available component statistics panel for two reasons:
   1. In actual development, it's better to select components based on filtering criteria such as theme attractiveness, form support, mobile compatibility, etc., rather than fixating on whether library A has a component that library B doesn't.
   2. The available component statistics panel is difficult to maintain.
4. **Pagination**: Improves browsing experience for large amounts of data.
5. **Detail Page Improvements**: Added component library detail pages, including feature introductions, component previews, and related links.

### Technical Optimizations
1. **Markdown Support**: Use Markdown syntax to write static page content.
2. **SEO Optimization**: Improved meta tags for each page to enhance search engine visibility.
3. **Traffic Analytics Integration**: Integrated Google Tag Manager for easy data analysis. Modify `app.vue` and replace `YOUR-GTM-ID` with your own GTM ID.


## Key Features

### Filter by Main Features
Filter components by main features with the following options:
- React：Made for React framework.
- Vue：Made for Vue framework.
- Mini Program：Made for Mini Program.
- Mobile：Mobile-friendly component library support.
- Tailwind CSS：The library uses Tailwind CSS itself and allows you to use it to customize components. As a Tailwind CSS user, this allows to keep a unique tool for all your styling.
- Styled：Styled components come with opinated style. You usually customize them by overriding these styles.
- Unstyled：Unstyled components come with no style and force you to write your own.
- Imported：You depends on an external library from which you import components. You benefits from library updates but can not directly customize components since it's not your own code.
- Pasted：You depends on no external library and need to copy paste component code into your own project. After pasting the code, it's yours and you can customize it as you want. However, you can't benefit from the updates automatically.
- Components：Provide components handling both logic and stying (or logic only if unstyled), but it is coupled to the Vue/React framework.
- CSS only：Only provide CSS classes to inject into your own components. You get no logic, but the library can be used with any framework (not only Vue/React).
- Free：The UI Library is entirely free for all available components.

### Filter by Additional Features
Filter components by secondary features with the following options:
- Fully Accessible：All components are designed with accessibility in mind.
- Built-in Themes：Provide different themes ready to be used.
- Theme Generator：Provide a tool to help developers generate new themes in an easy way.
- Dark Mode：Components are designed to support both a light and dark version.
- Semantic Colors：Colors can be associated with particular meanings, like 'primary', 'secondary', etc.
- Figma files：Figma is the leading design tool. Figma files contain the same components that the UI Library, so that designers can create designs without coding skills.
- Official：Made by a team responsible for managing a framework itself.
- Public Roadmap：A public roadmap is available to help you see next library features.
- RTL support：Ability to display text that is written from right to left (Arabic, Hebrew, etc.)
- Fully Typed：Provided components are all typed to help developers with auto-completion and potential errors.
- Form Helpers：Provided tools or examples for integration with form management libraries (Vee-Validate, Zod, Yup, etc.)

### Filter by Metrics
Filter components based on the number of components, GitHub stars, and weekly NPM downloads.

## Submission Guide
Welcome to contribute to UILibHub! You can:  
- Recommend or self-recommend a UI library
- Submit a website that uses a UI library already included on this site (as a UI library example display)

Please refer to the [Project Submission Guide](https://github.com/aidevtoolkit/uilibhub/docs/submission-guide.md) for submitting a project.

## Tech Stack
- [Nuxt3](https://nuxt.com/): Vue3 server-side rendering framework
- [Nuxt UI](https://ui.nuxt.com/): UI component library
- [nuxt/i18n](https://i18n.nuxtjs.org/): Multi-language support
- [Nuxt Content](https://content.nuxt.com/): Markdown content management
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/): Static type checking

## What can this open-source template be used for?
This template is ideal for building various resource navigation websites, such as:
- Technology tool navigation
- Learning resource directories
- Industry solution indexes
- Design resource libraries
- Open-source project showcases

It offers powerful filtering functionality, multi-language support, and good SEO optimization, allowing for quick setup of professional navigation websites.

## FAQ

**Q: How often is UILibHub data updated?**

**A:** GitHub stars and weekly NPM downloads are updated on the 1st of each month, while component counts are updated quarterly.

## Other Things
you can contact me at X(Twitter): https://x.com/luobogooooo

if this project is helpful to you, [buy me a coffee](https://ko-fi.com/luobogor).