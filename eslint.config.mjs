// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu({
    unocss: true,
    formatters: true,
  })
    // overrides any named configs
    .override(
      'antfu/imports',
      {
        rules: {
          "import/order": [
            "error",
            {
              "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]
            }
          ]
        },
      },
    ),
)
