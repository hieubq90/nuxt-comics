import {
  defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives,
} from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { builtinColors, presetShadcn } from 'unocss-preset-shadcn'

import presetRemToPx from '@unocss/preset-rem-to-px'
import presetTagify from '@unocss/preset-tagify'
import transformerVariantGroup from '@unocss/transformer-variant-group'

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
    presetTagify({
      prefix: 'un-',
    }),
    presetRemToPx(),
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    presetAnimations(),
    presetShadcn(builtinColors.map(c => ({ color: c }))),
  ],
  transformers: [
    transformerDirectives(),
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    transformerVariantGroup(),
  ],
  theme: {
    fontFamily: {
      baloo2: 'Baloo2',
      quicksand: 'Quicksand',
    },
  },
})
