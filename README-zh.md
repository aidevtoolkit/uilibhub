# UILibHub

[English](./READMD.md) | 中文

欢迎为 [UILibHub](https://uilibhub.com) 贡献内容！您可以：
- 推荐或自荐 UI 库
- 提交使用本站已收录 UI 库的网站（作为 UI 库示例展示）
请通过提交 [Issue](https://github.com/aidevtoolkit/uilibhub/issues) 来分享您的建议。

## UI 库提交格式
如果您要提交 UI 库，请使用以下格式。`filterMatchings` 具体字段说明请查看[这里](https://uilibhub.com/about) ：

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

## 使用 UI 库的网站提交
如果您要提交使用本站已收录 UI 库的网站作为示例，请提供以下信息：
- 网站名称
- 网站 URL
- 使用的 UI 库名称
- 简短说明（可选）：描述该网站如何使用了 UI 库或其特色之处

我们期待您的贡献，共同丰富 UILibHub 的资源库！
