import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu({
    unocss: false,
    formatters: true,
  })
    .overrideRules({
      'object-curly-newline': 'off',
      'antfu/consistent-list-newline': 'off',
      'style/indent': 'off',
      'style/comma-dangle': ['off'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        },
      ],
      'vue/no-multiple-template-root': 'off',
    }),
)

// import antfu from '@antfu/eslint-config'

// export default antfu({
//   // Or customize the stylistic rules
//   stylistic: {
//     indent: 2, // 4, or 'tab'
//     quotes: 'single' // or 'double'
//   },

//   // TypeScript and Vue are auto-detected, you can also explicitly enable them:
//   typescript: true,
//   vue: true,

//   // Disable jsonc and yaml support
//   jsonc: false,
//   yaml: false,

//   // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
//   ignores: [
//     '**/fixtures'
//     // ...globs
//   ],

//   unocss: true,
//   formatters: true
//   // formatters: {

//   // }
// }).overrideRules({
//   'object-curly-newline': 'off',
//   'antfu/consistent-list-newline': 'off',
//   'style/indent': 'off',
//   'style/comma-dangle': ['off']
// })
