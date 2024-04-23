import {
    defineConfig, presetAttributify, presetIcons, presetTypography, presetUno,
    transformerDirectives, transformerVariantGroup
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn'

import presetRemToPx from '@unocss/preset-rem-to-px'
import presetTagify from '@unocss/preset-tagify'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  disableNuxtInlineStyle: false,
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    // presetWebFonts({
    //   provider: "none",
    //   fonts: {
    //     baloo2: ["Baloo 2"],
    //     quicksand: ["Quicksand"],
    //   },
    // }),
    // @ts-expect-error
    presetTagify({
      prefix: 'un-',
    }),
    // @ts-expect-error
    presetRemToPx(),
    presetAnimations(),
    presetShadcn(builtinColors.map(c => ({ color: c }))),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    fontFamily: {
      baloo2: 'Baloo2',
      quicksand: 'Quicksand',
    },
  },
})
