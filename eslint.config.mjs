// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@stylistic/quotes": "off",
    "@stylistic/semi": "off",
    "@stylistic/comma-dangle": "off",
    "@stylistic/operator-linebreak": "off",
    "@stylistic/member-delimiter-style": "off",
    "vue/max-attributes-per-line": "off",
    "vue/comma-dangle": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
  },
});
