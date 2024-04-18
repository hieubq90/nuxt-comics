// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";
// @ts-ignore
export default withNuxt().append([unocss]);
