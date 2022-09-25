/** @type {import("deepmark").UserConfig} */
export default {
  sourceLanguage: "en",
  outputLanguages: ["ja", "zh"],
  directories: [
    ["i18n/$langcode$", "i18n/$langcode$"],
    ["docs", "i18n/$langcode$/docusaurus-plugin-content-docs/current"],
  ],
  frontmatterFields: {
    include: ["title", "tags"],
  },
  jsxComponents: {
    include: {
      IfcCard: { children: true, attributes: ["title"] },
      IfcTab: { attributes: ["items.content"] },
    },
    exclude: ["IfcImage", "Scene", "Sponsoring"],
  },
  jsonOrYamlProperties: {
    include: ["message", "description"],
  },
};
