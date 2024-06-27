# UILibHub

![UILibHub](./banner.jpg)

[English](./README.md) | 中文

欢迎为 [UILibHub](https://uilibhub.com) 贡献内容！您可以：
- 推荐或自荐 UI 库
- 提交使用本站已收录 UI 库的网站（作为 UI 库示例展示）

请通过提交 [Issue](https://github.com/aidevtoolkit/uilibhub/issues) 来分享您的建议。

## UI 库提交格式
如果您要提交 UI 库，请使用以下格式：

```json
{
  "name": "库名称",
  "url": "官方网站",
  "githubRepoUrl": "GitHub 仓库链接",
  "npmPackageUrl": "npm 包链接",
  "componentCount": 组件数量,
  "filterMatchings": {
    // 特性列表，true 表示支持，false 表示不支持
  }
}
```

以下是 Material UI 的提交示例：

```json
{
  "name": "Material UI",
  "url": "https://mui.com",
  "githubRepoUrl": "https://github.com/mui/material-ui",
  "npmPackageUrl": "https://www.npmjs.com/package/@mui/material",
  "componentCount": 59,
  "filterMatchings": {
    "FStyled": true,
    "FUnstyled": false,
    "FImported": true,
    "FPasted": false,
    "FComponents": true,
    "FCSS": false,
    "FReact": true,
    "FVue": true,
    "FMiniProgram": false,
    "FMobile": true,
    "FTailwind": true,
    "FFree": true,
    "FAccessible": true,
    "FBuiltinThemes": true,
    "FThemeGenerator": true,
    "FDarkMode": true,
    "FSemanticColors": true,
    "FFigma": true,
    "FOfficial": false,
    "FRoadmap": true,
    "FRTLSupport": true,
    "FTyped": true,
    "FForm": true
  }
}
```

`filterMatchings` 具体字段说明：
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

## 使用 UI 库的网站提交
如果您要提交使用本站已收录 UI 库的网站作为示例，请提供以下信息：
- 网站名称
- 网站 URL
- 使用的 UI 库名称
- 简短说明（可选）：描述该网站如何使用了 UI 库或其特色之处

我们期待您的贡献，共同丰富 UILibHub 的资源库！
