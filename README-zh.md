# UILibHub

![UILibHub](./docs/banner.jpg)

[English](./README.md) | 中文

## 什么是 UILibHub？
[UILibHub](https://uilibhub.com/) 专注收集和分享 React、Vue 和小程序组件库的优质资源。UILibHub 提供最新、最全面的组件库推荐，助力开发者高效构建现代化应用。网站基于 David Dahan 的开源项目 [UI Libs](https://github.com/ddahan/ui-libs) 开发，特此致谢。主要对 UI Libs 进行如下改造：

### 功能增强
1. **扩展库收录范围**：新增 React、移动端、小程序相关 UI 库，目前共收录 **30+** 优质 UI 库。
2. **多语言支持**：目前支持中英双语，未来计划支持更多语言。
3. **删除可用组件统计面板**。原因有两个： 
  - 实际开发中，挑选组件更好是基于筛选项进行考虑，比如主题是否好看、是否提供表单支持、是否支持移动端等，而不是拘泥于某个组件 A 组件库有而 B 组件库没有。
  - 可用组件统计面板数据不好维护。
4. **分页功能**：提高大量数据的浏览体验。
5. **详情页改进**：新增组件库详情页，包括功能介绍、组件预览、相关链接等。

### 技术优化
1. **Markdown 支持**：使用 Markdown 语法编写静态页面内容。
2. **SEO 优化**：完善每个页面的元标签，提高搜索引擎可见性。
3. **流量统计集成**：集成 Google Tag Manager，便于数据分析。修改 `app.vue`，替换 `YOUR-GTM-ID` 为自己的 GTM ID 即可。

[了解更多功能](https://uilibhub.com/zh/about)。

## 提交项目
欢迎为 UILibHub 贡献内容！您可以：
- 推荐或自荐 UI 库
- 提交使用本站已收录 UI 库的网站（作为 UI 库示例展示）

提交项目请参考[提交项目指南](https://github.com/aidevtoolkit/uilibhub/blob/main/docs/submission-guide-zh.md)。

## 技术栈
- [Nuxt3](https://nuxt.com/)：Vue3 服务端渲染框架
- [Nuxt UI](https://ui.nuxt.com/)：UI 组件库
- [nuxt/i18n](https://i18n.nuxtjs.org/)：多语言支持
- [Nuxt Content](https://content.nuxt.com/)：Markdown 渲染 HTML
- [Tailwind CSS](https://tailwindcss.com/)：实用 CSS 框架
- [TypeScript](https://www.typescriptlang.org/)：静态类型检查

## 这个开源模板可以用来做什么？
本模板非常适合构建各类资源导航网站，例如：
- 工具导航：如 AI 工具导航站、前端工具导航站
- 学习资源目录
- 设计资源库
- 开源项目 Showcase

它提供了强大的筛选功能、多语言支持和良好的 SEO 优化，可以快速搭建专业的导航类网站。

## 如何使用？
安装 & 启动：
```shell
npm i
npm run dev
```

部署：
可以使用 [Cloudflare Pages](https://indiehackertools.net/blog/cloudflare-pages-guide-automating-deployment-of-github-projects)免费部署。

## 关于我
你可以在 X（Twitter）上联系我: https://x.com/luobogooooo

如果这个项目对你有帮助，可以请我喝杯咖啡。

![support-code](https://github.com/aidevtoolkit/uilibhub/assets/22536029/0394b9dd-8ced-4dca-b9cf-914a1b81a175)