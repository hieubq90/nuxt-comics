import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: true,
  }),
)
//   .overrideRules({
//   'vue/no-multiple-template-root': 'off',
//   'import/order': [
//     'error',
//     {
//       groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
//     },
//   ],
//   'sort-imports': 'off',
// })
