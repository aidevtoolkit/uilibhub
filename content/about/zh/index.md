---
title: 关于我们
---

![UILibHub](/img/banner.jpg)

## 什么是 UILibHub？
UILibHub 是一个专注于收集和分享 React、Vue 和小程序组件库的资源平台。我们提供最新、最全面的组件库推荐，旨在帮助开发者高效构建现代化应用。本网站基于 David Dahan 的开源项目 [UI Libs](https://github.com/ddahan/ui-libs) 开发，并进行了以下主要改造：

### 功能增强
1. **扩展库收录范围**：新增 React、移动端、小程序相关 UI 库，目前共收录 **30+** 优质 UI 库。
2. **多语言支持**：目前支持中英双语，未来计划支持更多语言。
3. 删除可用组件统计面板。原因有两个： 
  1. 实际开发中，挑选组件更好是基于筛选项进行考虑，比如主题是否好看、是否提供表单支持、是否支持移动端等，而不是拘泥于某个组件 A 组件库有而 B 组件库没有。
  2. 可用组件统计面板数据不好维护。
4. **分页功能**：提高大量数据的浏览体验。
5. **详情页改进**：新增组件库详情页，包括功能介绍、组件预览、相关链接等。

### 技术优化
1**Markdown 支持**：使用 Markdown 语法编写静态页面内容。
2**SEO 优化**：完善每个页面的元标签，提高搜索引擎可见性。
3**流量统计集成**：集成 Google Tag Manager，便于数据分析。修改 `app.vue`，替换 `YOUR-GTM-ID` 为自己的 GTM ID 即可。

## 主要功能

### 按主要功能筛选
按主要功能筛选组件，提供以下筛选项：
- React：React 可使用的组件库。
- Vue：Vue 可使用的组件库。
- Mini Program 小程序：小程序组件库。
- Mobile 移动端：移动端支持友好的组件库。
- Tailwind CSS：库使用 Tailwind CSS 编写，且可以使用 Tailwind CSS 自定义组件。
- Styled 样式化：样式化组件（Styled components）带有固定的样式。通常你可以通过覆盖这些样式来自定义它们。
- Unstyled 无样式：无样式组件（Unstyled components）没有任何样式，你需要自己编写样式。
- Imported 导入：你需要安装依赖来导入组件（代码在 node_modules）。可以获得随时更新库的便利，但由于代码不是你自己的，所以无法修改组件代码。
- Pasted 拷贝使用：不依赖任何外部库（代码不在 node_modules），需要将组件代码复制粘贴到的项目中。粘贴代码后，它就是你的了，你可以随意自定义。但是你无法通过 NPM 更新。
- Components 组件：提供组件处理逻辑和样式（如果是无样式组件则只处理逻辑），但它与 Vue/React 框架耦合。
- CSS only 仅 CSS：只提供 CSS 类注入到你自己的组件中。UI 库不提供任何逻辑，但这个库可以与任何框架一起使用。
- Free 免费：该 UI 库对于所有组件完全免费。

### 按其他功能筛选
按其他次要功能筛选组件，提供以下筛选项：
- Fully Accessible 无障碍设计：所有组件都考虑了完全无障碍。
- Built-in Themes 内置主题：提供不同的可直接使用的主题。
- Theme Generator 主题生成器：提供一个工具，帮助开发者以简单的方式生成新主题。
- Dark Mode 暗黑模式：组件设计支持明亮和暗黑两种版本。
- Semantic Colors 语义颜色：颜色与特定的含义相关联，如「primary」、「secondary」等。
- Figma files Figma 文件：Figma 是领先的设计工具。Figma 文件包含与 UI 库相同的组件，即使设计师无需编码技能也可以创建设计。
- Official 官方：由负责管理框架本身的团队制作。
- Public Roadmap 公开路线图：提供公开的路线图（Roadmap），帮助你查看库的下一个功能。
- RTL support RTL 支持：支持从右到左显示文本（阿拉伯语、希伯来语等）。
- Fully Typed 完全类型化：提供的组件都经过类型化，可以帮助开发人员实现自动补全并避免潜在错误。
- Form Helpers 表单助手：提供工具或示例，用于与表单管理库（Vee-Validate、Zod、Yup 等）集成。

### 按数量筛选
按组件数量、GitHub 星数、NPM 周下载量筛选组件。

## 提交项目
欢迎为 UILibHub 贡献内容！您可以：
- 推荐或自荐 UI 库
- 提交使用本站已收录 UI 库的网站（作为 UI 库示例展示）

提交项目请参考[提交项目指南](https://github.com/aidevtoolkit/uilibhub/blob/main/docs/submission-guide-zh.md)。

## 技术栈
- [Nuxt3](https://nuxt.com/)：Vue3 服务端渲染框架
- [Nuxt UI](https://ui.nuxt.com/)：UI 组件库
- [nuxt/i18n](https://i18n.nuxtjs.org/)：多语言支持
- [Nuxt Content](https://content.nuxt.com/)：Markdown 内容管理
- [Tailwind CSS](https://tailwindcss.com/)：实用优先的 CSS 框架
- [TypeScript](https://www.typescriptlang.org/)：静态类型检查

## 这个开源模板可以用来做什么？
本模板非常适合构建各类资源导航网站，例如：
- 技术工具导航
- 学习资源目录
- 行业解决方案索引
- 设计资源库
- 开源项目showcase

它提供了强大的筛选功能、多语言支持和良好的SEO优化，可以快速搭建专业的导航类网站。

## 常见问题

**Q：UILibHub 数据更新频率？**

**A：** GitHub 星数和 NPM 周下载量每月 1 日更新，组件数量每季度更新一次。

## 关于我
你可以在 X（Twitter）上联系我: https://x.com/luobogooooo

如果这个项目对你有帮助，可以请我喝杯咖啡。

![support-code](https://github.com/aidevtoolkit/uilibhub/assets/22536029/0394b9dd-8ced-4dca-b9cf-914a1b81a175)