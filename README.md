# UILibHub

English | [中文](./README-zh.md)

Welcome to contribute to [UILibHub](https://uilibhub.com)! You can:
- Recommend or self-nominate UI libraries
- Submit websites that use UI libraries already listed on our platform (to showcase as examples)

Please share your suggestions by submitting an [Issue](https://github.com/aidevtoolkit/uilibhub/issues).

## UI Library Submission Format
If you're submitting a UI library, please use the following format. For detailed explanations of `filterMatchings` fields, please check [here](https://uilibhub.com/about):

```json
{
  "name": "Library Name",
  "url": "Official Website",
  "githubRepoUrl": "GitHub Repository Link",
  "npmPackageUrl": "npm Package Link",
  "componentCount": Number of Components,
  "filterMatchings": {
    // Feature list, true indicates support, false indicates no support
  }
}
```

Here's an example submission for Material UI:

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

## Website Using UI Library Submission
If you're submitting a website that uses a UI library already listed on our platform as an example, please provide the following information:
- Website Name
- Website URL
- Name of the UI Library used
- Brief Description (optional): Explain how the website utilizes the UI library or its notable features

We look forward to your contributions to help enrich the UILibHub resource library!
