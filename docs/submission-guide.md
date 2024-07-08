# UILibHub Submission Guide

English | [中文](./submission-guide-zh.md)

Welcome to contribute to [UILibHub](https://uilibhub.com)! You can:
- Recommend or self-nominate UI libraries
- Submit websites that use UI libraries already listed on our platform (to showcase as examples)

Please share your suggestions by submitting an [Issue](https://github.com/aidevtoolkit/uilibhub/issues).

## UI Library Submission Format
If you're submitting a UI library, please use the following format:

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
    "FReact": true,
    "FVue": true,
    "FMiniProgram": false,
    "FMobile": true,
    "FStyled": true,
    "FUnstyled": false,
    "FImported": true,
    "FPasted": false,
    "FComponents": true,
    "FCSS": false,
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

Detailed explanations of `filterMatchings`:
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

## Website Using UI Library Submission
If you're submitting a website that uses a UI library already listed on our platform as an example, please provide the following information:
- Website Name
- Website URL
- Name of the UI Library used
- Brief Description (optional): Explain how the website utilizes the UI library or its notable features

We look forward to your contributions to help enrich the UILibHub resource library!